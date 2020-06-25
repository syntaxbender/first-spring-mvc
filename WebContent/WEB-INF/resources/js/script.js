var errorInputBorderColor = "red";
var normalInputBorderColor = "#a9a9a9";
var locker = false;
function showPopup(callback){
	var scrollPos = $(window).scrollTop();
	var status = callback[0];
	message = "";
	$.each(callback[1], function(key, value){
		message += value;
	});
	if(status === true){
		var n_icon = "success";
		var n_title = "Başarılı";
	}else{
		var n_icon = "error";
		var n_title = "Hata";
	}
	Swal.fire({
		  title: n_title,
		  icon: n_icon,
		  text: message,
		  showCloseButton: false,
		  showCancelButton: false,
		  focusConfirm: false,
		  onAfterClose: () =>  $(window).scrollTop(scrollPos),
		  confirmButtonText: 'Kapat'
	})
}

function makeRequest(method,url,parameters={}){
	var req = $.ajax({
		type: method,
		url: url,
		data: parameters,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "json",
		async:false
	});
    if (req.status != 200) {
		return [false,["Sistemsel bir hata oluştu."]];
    } else {
        try {
            var returnData = JSON.parse(req.responseText);
            return returnData;
        } catch (e) {
        	return [false,["Sistemsel bir hata oluştu."]];
        }
    }
}
function sendDone(){
	$("#adsoyad").val("");
	sbMask.reset("tckimlik");
	sbMask.reset("dogumtarihi");
	sbMask.reset("telefon");
	$("#dogumtarihi").val("");
	$("#eposta").val("");
	$("#vilayetler option:selected").prop('selected', false);
	$("#ilceler option:selected").prop('selected', false);
	$("#mahalleler option:selected").prop('selected', false);
	$("#mahalleler").next().next().removeClass("top");
	$("#ilceler").next().next().removeClass("top");
	$("#vilayetler").next().next().removeClass("top");
	$("#adres").val("");
	$("#oncedenperakende").val("");
	$("#tercihsebebi").val("");
	$("#yatirimmiktari").val("");
	$("#opsiyonel").val("");
}
function send(){
	var validateStatus=sbValidate.validation();
	var birthDateTemp = $("#dogumtarihi").val().split("/");
	var birthDate = birthDateTemp[2]+"-"+birthDateTemp[1]+"-"+birthDateTemp[0];
	if(validateStatus){
		var response = makeRequest(
			"POST",
			"./bayii-kayit",
			{
				'AdSoyad': $("#adsoyad").val(),
				'TCKimlik': $("#tckimlik").val(),
				'Telefon': sbMask.unmask("telefon"),
				'Eposta': $("#eposta").val(),
				'DogumTarihi': birthDate,
				'Vilayet':$("#vilayetler option:selected").val(),
				'Ilce':$("#ilceler option:selected").val(),
				'Mahalle':$("#mahalleler option:selected").val(),
				'Adres': $("#adres").val(),
				'OncedenPerakende': $("#oncedenperakende").val(),
				'TercihSebebi': $("#tercihsebebi").val(),
				'YatirimMiktari': $("#yatirimmiktari").val(),
				'Opsiyonel': $("#opsiyonel").val()
			}
		);
		if(response.status == "1"){
			sendDone();
			showPopup([true,response.message]);
		}else{
			showPopup([false,response.message]);
		}

	}
	$(".bayii-kayit-button").css("background-color","#4aa8d3");
	$(".bayii-kayit-button").val("Başvuruyu Gönder");
}
function generateID(length){
	var id="";
	for(var i=0; i<length; i++){
		corn = Math.round(Math.random());
		if(corn == 0)
		id += String.fromCharCode(Math.round(Math.random()*25)+97);
		else
		id += String.fromCharCode(Math.round(Math.random()*9)+48);
	}
	return id;
}
function kimlikKontrol(numara){
	var tek = 0;
	var cift = 0;
	if (numara[0] == 0) return false;
	tek = parseInt(numara[0])+parseInt(numara[2])+parseInt(numara[4])+parseInt(numara[6])+parseInt(numara[8]);
	cift = parseInt(numara[1])+parseInt(numara[3])+parseInt(numara[5])+parseInt(numara[7]);
	var sonuc1 = ((tek*7)-cift)%10;
	var sonuc2 = ((tek*7)+(cift*9))%10;
	var sonuc3 = 0;
	for (var i = 0; i < 10; i++) {
		sonuc3 += parseInt(numara[i]);
	}
	sonuc3 = sonuc3%10;
	var sonuc4 = (tek*8)%10;
	if (sonuc1 != numara[9]) return false;
	if (sonuc2 != numara[9]) return false;
	if (sonuc3 != numara[10]) return false;
	if (sonuc4 != numara[10]) return false;
	return true;
}
$(document).ready(function(){
	var iller = makeRequest("GET", "./lokasyon/vilayetler");
	var illerbuffer = "";
	$.each(iller, function(key, value){
		illerbuffer += "<option value=\""+key+"\">"+value+"</option>";
	});
	$("#vilayetler").html("<option class=\"hidden\" value=\"blank\" selected></option>"+illerbuffer);
    $('#dogumtarihi').datepicker({
    	format: 'dd/mm/yyyy',
		language: 'tr-TR'
    });
	$(".bayii-kayit-button").on("click", function(){
		$(this).val("Lütfen Bekleyiniz...");
		$(this).css("background-color","#b9b9b9");
		send();
	});
	$("#vilayetler").on("change",function(){
		var ilceler = makeRequest("GET", "./lokasyon/ilceler/"+$("#vilayetler option:selected" ).val());
		var ilcelerbuffer = "";
		$.each(ilceler, function(key, value){
			ilcelerbuffer += "<option value=\""+key+"\">"+value+"</option>";
		});
		$("#ilceler").html("<option class=\"hidden\" value=\"blank\" selected></option>"+ilcelerbuffer);
		$("#ilceler").parent().removeClass("hidden");
	});
	$("#ilceler").on("change",function(){
		var mahalleler = makeRequest("GET", "./lokasyon/mahalleler/"+$("#ilceler option:selected" ).val());
		var mahallelerbuffer = "";
		$.each(mahalleler, function(key, value){
			mahallelerbuffer += "<option value=\""+key+"\">"+value+"</option>";
		});
		$("#mahalleler").html("<option class=\"hidden\" value=\"blank\" selected></option>"+mahallelerbuffer);
		$("#mahalleler").parent().removeClass("hidden");

	});
	$("select").on("change",function(e){
		$(this).next().next().addClass("top");
	});
	/*######################## SYNTAXBENDER INPUT VALIDATION ############################ */
	sbMask.run({
		"telefon":{mask:"(000)-000-0000",rule:"^([0-9])+$"},
		"tckimlik":{mask:"00000000000",rule:"^([0-9])+$"},
		"dogumtarihi":{mask:"00/00/0000",rule:"^([0-9])+$"}
	});
	sbValidate.run({
		showMessage: true,
		inputRules: {
			adsoyad: {regex: "^([A-Za-zĞÜŞİÖÇğüşıöç ]){4,70}$", message: "Lütfen ad soyadınızı kontrol ediniz.", messageErrorClass:"error", inputErrorClass:"error"},
			tckimlik: {regex: "^([0-9]){11}$", message: "TC kimlik numaranızı kontrol ediniz.", messageErrorClass:"error", inputErrorClass:"error", customFunc:"kimlikKontrol"},
			telefon: {regex: "^([0-9]){10}$", message: "Telefon numaranızı kontrol ediniz.", messageErrorClass:"error", inputErrorClass:"error", unmask:true},
			eposta: {regex: "^(?=.{6,85}$)(([A-Za-z0-9.-_]+)@([A-Za-z0-9.-_]+)\.([A-Za-z]+))$", message: "E-posta adresinizi kontrol ediniz", messageErrorClass:"error", inputErrorClass:"error"},
			dogumtarihi: {regex: "^(([0]{1})([1-9]{1})|([1-9]{1})|([12]{1})([0-9]{0,1})|3([01]{1}))\/(0*([1-9]{1})|1([012]{1}))\/(19([0-9]{2})|20([0-9]{2}))$", message: "Doğum tarihinizi Gün/Ay/Yıl formatında giriniz.(ÖR: 25/11/1974)", messageErrorClass: "error", inputErrorClass: "error", SleepTime:150},
			vilayetler: {regex: "^([0-9])+$", message: "Lütfen ilinizi seçiniz.", messageErrorClass:"error", inputErrorClass:"error"},
			ilceler: {regex: "^([0-9])+$", message: "Lütfen ilçenizi seçiniz.", messageErrorClass:"error", inputErrorClass:"error"},
			mahalleler: {regex: "^([0-9])+$", message: "Lütfen mahallenizi seçiniz.", messageErrorClass:"error", inputErrorClass:"error"},
			adres: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"},
			oncedenperakende: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"},
			tercihsebebi: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"},
			yatirimmiktari: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"},
			tercihsebebi: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"},
			opsiyonel: {regex: "^(.){1,1000}$", message: "Bu alanın doldurulması zorunludur.",  messageErrorClass:"txerror", inputErrorClass:"error"}
		}
	});
});


