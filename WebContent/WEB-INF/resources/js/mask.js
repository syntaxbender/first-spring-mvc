/**
* jQuery sbMask Plugin v1.0.0 
* Created by SyntaxBender on 2020-06-22.
* 
* Release notes:
* - Only supports backspace key. Not supported delete key on this version.
* - Select range feature not supported for delete or backspace event.
* - Paste event not supported on this version.
*/
var sbMask = {
	plainText: {},
	maskRules: {},
	masker: function(input,type){
		if(this.maskRules[input.id] != null) var mask = this.maskRules[input.id]["mask"];
		if(this.plainText[input.id] == null) this.plainText[input.id] = "";
		var currentPositionOnInput = $(input)[0].selectionStart;
		var buffer = "";
		var plain_counter = 0;
		if(this.plainText[input.id].length==0){
			$(input).val("");
			$(input)[0].focus();
			$(input)[0].setSelectionRange(0,0);
			return;
		}
		for(var i=0;i<mask.length;i++){
			if(mask[i] == "0"){
				buffer += this.plainText[input.id][plain_counter];
				plain_counter++;
				if(mask[i+1] == "0"){
					if((this.plainText[input.id].length) <= plain_counter) break;
				}
			}else{
				buffer += mask[i];
				if((this.plainText[input.id].length) <= plain_counter) break;
			}
		}
		if(type=="insert"){
			var counter = 0;
			for(var i=currentPositionOnInput;i<buffer.length;i++){
				counter++;
				if(mask[i] == "0") break;
			}
		}else if(type=="delete"){
			var counter = 0;
			for(var i=(currentPositionOnInput-1);i>=0;i--){
				counter=counter-1;
				if(mask[i] == "0") break;
			}
		}
		var newInputPosition = currentPositionOnInput+counter;
		$(input).val(buffer);
		$(input)[0].focus();
		$(input)[0].setSelectionRange(newInputPosition,newInputPosition);
	},
	insertChar: function(input,char){
		if(this.maskRules[input.id] != null) var mask = this.maskRules[input.id]["mask"];
		if(this.maskRules[input.id] != null) var letterRule = this.maskRules[input.id]["rule"];
		if(this.plainText[input.id] == null) this.plainText[input.id] = "";
		if(char != null || char == ""){
			var maskRealLength = mask.match(/0/g).length;
			var patt = new RegExp(letterRule);
			inputStatus = patt.test(char);
			if(inputStatus && (maskRealLength>=(this.plainText[input.id].length+1))){
				var counter = 0;
				for(var iter = 0;iter<$(input)[0].selectionStart;iter++){
					if(mask[iter] != "0"){
						counter++;
					}
				}
				var positionOnPlainText = ($(input)[0].selectionStart-counter);
				var arr = (this.plainText[input.id]).split('');
				arr.splice(positionOnPlainText, 0, char);
				this.plainText[input.id] = "";
				var buffer = "";
				$.each( arr, function(key, value){
					buffer += value;
				});
				this.plainText[input.id] = buffer;
				this.masker(input,"insert");
			}
		}
	},
	deleteChar: function(input){
		if(this.maskRules[input.id] != null) var mask = this.maskRules[input.id]["mask"];
		if(this.plainText[input.id] == null) this.plainText[input.id] = "";
		var counter = 0;
		for(var iter = 0;iter<$(input)[0].selectionStart;iter++){
			if(mask[iter] != "0"){
				counter++;
			}

		}
		var positionOnPlainText = ($(input)[0].selectionStart-counter)-1;
		if(positionOnPlainText>=0 && this.plainText[input.id].length>0){
			var arr = this.plainText[input.id].split('');
			arr.splice(positionOnPlainText, 1, "");
			var buffer = "";
			$.each( arr, function(key, value){
				buffer += value;
			});
			this.plainText[input.id] = buffer;
			this.masker(input,"delete");
		}
	},
	unmask: function(inputID){
		if(this.plainText[inputID] != null){
			return this.plainText[inputID];
		}else{
			return false;
		}
	},
	reset: function(inputID){
		if(this.plainText[inputID] != null){
			this.plainText[inputID] = null;
			$("#"+inputID).val("");
		}
	},
	run: function(parameters){
		this.maskRules = parameters;
		$(".mask").on('keypress', function(e) {
			var char = String.fromCharCode(e.keyCode);
			e.preventDefault();
			sbMask.insertChar(this,char);
		}).on('keydown', function(e) {
			if(e.keyCode == 8){
				//e.keyCode == 46
				e.preventDefault();
				sbMask.deleteChar(this);
			}
		});
	}
};