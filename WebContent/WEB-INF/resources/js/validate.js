/**
* Created by SyntaxBender on 2020-06-22.
*/
var sbValidate = {
	validateArray: {},
	validation: function (callback=this.validateArray){
		var status = true;
		var inputRules = callback.inputRules;
		var showMessage = callback.showMessage;
		$.each(inputRules, function(key, value) {
			var patt = new RegExp(value.regex);
			if($("#"+key).prop('nodeName') == "SELECT"){
				inputValue=$("#"+key+" option:selected").val();
			}else if($("#"+key).prop('nodeName') == "INPUT" || $("#"+key).prop('nodeName') == "TEXTAREA"){
				if(typeof window["sbMask"]["unmask"] == "function" && value.unmask === true){
					myOra = window["sbMask"]["unmask"](key);
					if(typeof myOra == "string"){
						inputValue = myOra;
					}else{
						inputValue = $("#"+key).val();
					}
				}else{
					inputValue = $("#"+key).val();
				}
				
			}
			inputStatus = patt.test(inputValue);
			if(value.customFunc != null){
				if(typeof window[value.customFunc] == "function"){
					customStatusBuffer = window[value.customFunc](inputValue);
					if(typeof customStatusBuffer == "boolean"){
						customStatus = customStatusBuffer;
					}else customStatus = false;
				}else customStatus = false;
			}
			if(inputStatus === true && ((inputValue != "blank" && $("#"+key).prop('nodeName') == "SELECT") || $("#"+key).prop('nodeName') != "SELECT") && ((value.customFunc != null && customStatus) || value.customFunc == null)) {
				if($("#"+key).parent().find('span').length == 1){
					$("#"+key).parent().find('span').remove();
				}
				if($("#"+key).hasClass(value.inputErrorClass)){
					$("#"+key).removeClass(value.inputErrorClass)
				}
			}else{
				status=false;
				if($("#"+key).parent().find('span').length == 0){
					$("#"+key).parent().prepend("<span class=\""+value.messageErrorClass+"\">"+value.message+"</span>");
				}
				if($("#"+key).hasClass(value.inputErrorClass) === false){
					$("#"+key).addClass(value.inputErrorClass)
				}
			}
		});
		if(showMessage && status === false){
			$("html, body").animate({scrollTop:0}, 500, 'swing', function() {
				showPopup([false,["Lütfen formu eksiksiz doldurunuz."]]);
			});
		}
		return status;
	},
	run: function(callback){
		this.validateArray=callback; 
		$("input.validate, textarea.validate").on("focusin",function(){
			if($(this).parent().find('span').length == 1){
				$(this).parent().find('span').remove();
			}
			if($(this).hasClass(callback["inputRules"][this.id].inputErrorClass)){
				$(this).removeClass(callback["inputRules"][this.id].inputErrorClass)
			}
		});
		$("input.validate, textarea.validate").on("focusout",function(){
			if(this.id != null && callback["inputRules"][this.id] != null){
				var validateParams={};
				validateParams["inputRules"] = {};
				validateParams["inputRules"][this.id] = callback.inputRules[this.id];			
				validateParams["showMessage"] = false;
				if(validateParams["inputRules"][this.id]["SleepTime"] != null){
					setTimeout(function(){
						sbValidate.validation(validateParams);
					}, validateParams["inputRules"][this.id]["SleepTime"]);
				}else{
					sbValidate.validation(validateParams);
				}
			}
		});
		$("select").on("change",function(e){
			if(this.id != null && callback["inputRules"][this.id] != null){
				var validateParams={};
				validateParams["inputRules"] = {};
				validateParams["inputRules"][this.id] = callback.inputRules[this.id];			
				validateParams["showMessage"] = false;
				if(validateParams["inputRules"][this.id]["SleepTime"] != null){
					setTimeout(function(){
						sbValidate.validation(validateParams);
					}, validateParams["inputRules"][this.id]["SleepTime"]);
				}else{
					sbValidate.validation(validateParams);
				}
			}
		});
	}
}