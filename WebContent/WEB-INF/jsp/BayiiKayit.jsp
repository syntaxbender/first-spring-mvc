<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>
body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) { overflow-y: visible !important; }

</style>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
<title>Bayilik Ön Başvuru Formu</title>
<link href="./resources/css/form.css?v=8" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.9/datepicker.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />

<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.9/datepicker.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.9/i18n/datepicker.tr-TR.min.js"></script>
<script src="./resources/js/mask.js?v=5122243"></script>
<script src="./resources/js/validate.js?v=5122243"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script> -->
<script src="./resources/js/script.js?v=5122243"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.15.2/dist/sweetalert2.all.min.js"></script>
</head>
<body>
	<h1 class="title">LOKUMCU BABA</h1><br><h2 class="title">Bayiilik Başvuru Formu</h2>
	<div id="login-area">
		<img src="./resources/img/logo.png" class="logo">
		<form:form method="POST" modelAttribute="bayii-bilgileri">
		<div class="input-class">
			<input class="validate" type="text" placeholder="Adı - Soyadı"  id="adsoyad" required="" autofocus>
			<label>Adı - Soyadı</label>
		</div>
		<div class="input-class">
			<input class="validate mask" type="text" placeholder="T.C. Kimlik No" id="tckimlik" required="" autofocus>
			<label>T.C. Kimlik No</label>
		</div>
		<div class="input-class">
			<input class="validate mask" type="text" placeholder="(5XX)-XXX-XXXX" id="telefon" required="" autofocus>
			<label>Telefon (0 olmadan yazınız)</label>
		</div>
		<div class="input-class">
			<input class="validate" type="text" placeholder="E-Posta" id="eposta" required="" autofocus>
			<label>E-Posta</label>
		</div>
		<div class="input-class">
			<input class="validate mask" type="text" placeholder="GG/AA/YYYY" id="dogumtarihi" required="" autofocus>
			<label>Doğum Tarihi (Gün/Ay/Yıl)</label>
		</div>
		<div class="input-class">
			<select id="vilayetler">
			<option class="hidden" value="blank" selected></option>
			</select>
			<i class="fa fa-caret-down" aria-hidden="true"></i>
			<label>İkamet Ettiğiniz İl</label>
		</div>
		<div class="input-class hidden">
			<select id="ilceler">
			<option class="hidden" value="blank" selected></option>
			</select>
			<i class="fa fa-caret-down" aria-hidden="true"></i>
			<label>İkamet Ettiğiniz İlçe</label>
		</div>
		<div class="input-class hidden">
			<select id="mahalleler">
			<option class="hidden" value="blank" selected></option>
			</select>
			<i class="fa fa-caret-down" aria-hidden="true"></i>
			<label>İkamet Ettiğiniz Mahalle</label>
		</div>
		<div class="input-class">
			<textarea id="adres" class="validate" placeholder="İşletme için düşündüğünüz açık adresi detaylıca yazınız."></textarea>
		</div>
		<div class="input-class">
			<textarea id="oncedenperakende" class="validate" placeholder="Daha önce perakende ticareti ile uğraştınız mı?"></textarea>
		</div>
		<div class="input-class">
			<textarea id="tercihsebebi" class="validate" placeholder="Lokumcu Baba'yı tercih etmenizin sebebi nedir?"></textarea>
		</div>
		<div class="input-class">
			<textarea id="yatirimmiktari" class="validate" placeholder="Yatırım miktarınız nedir?"></textarea>
		</div>
		<div class="input-class">
			<textarea id="opsiyonel" class="validate" placeholder="Eklemek istedikleriniz nelerdir?"></textarea>
		</div>

		<input type="button" class="bayii-kayit-button" value="Başvuruyu Gönder">
		</form:form>
	</div>
</body>
</html>