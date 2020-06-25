<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="tr">
<!--
  ██╗██╗                ███████╗██╗   ██╗███╗   ██╗████████╗ █████╗ ██╗  ██╗██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗                ██╗  
 ██╔╝██║                ██╔════╝╚██╗ ██╔╝████╗  ██║╚══██╔══╝██╔══██╗╚██╗██╔╝██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗               ╚██╗ 
██╔╝ ██║█████╗█████╗    ███████╗ ╚████╔╝ ██╔██╗ ██║   ██║   ███████║ ╚███╔╝ ██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝    █████╗█████╗╚██╗
╚██╗ ╚═╝╚════╝╚════╝    ╚════██║  ╚██╔╝  ██║╚██╗██║   ██║   ██╔══██║ ██╔██╗ ██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗    ╚════╝╚════╝██╔╝
 ╚██╗██╗                ███████║   ██║   ██║ ╚████║   ██║   ██║  ██║██╔╝ ██╗██████╔╝███████╗██║ ╚████║██████╔╝███████╗██║  ██║               ██╔╝ 
  ╚═╝╚═╝                ╚══════╝   ╚═╝   ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝               ╚═╝  
-->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
<meta name="author" content="SyntaxBender">
<meta property="og:title" content="LoKuMCu B@B@"/>
<meta property="og:type" content="website" />
<meta property="og:site_name" content="LoKuMCu B@B@"/>
<meta name="description" content=""/>
<meta property="og:description" content=""/>
<meta property="og:locale" content="tr_TR"/>
<meta property="og:image" content="./resources/img/logo.png"/>
<title>Lokumcu Baba | Anasayfa</title>
<link href="https://fonts.googleapis.com/css?family=PT+Sans+Narrow|PT+Sans|Poppins|Raleway:500|Muli:300,400,600" rel="stylesheet">
<link href="./resources/css/style.css?v=7" rel="stylesheet" type="text/css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
<link rel="icon" type="image/png" href="../resources/img/logo.png">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
$(document).ready(function(){
	$("#mobchildmenu").click(function(){
		$(this).next().slideToggle(300);
	});
});
function go(url){
	window.location=url;
}
function menutoggle(){
	$("#mobmenuexp").slideToggle(300);
}
</script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.css" />
<style type="text/css">
	div#content > a.gallery > div{
		width: calc(50% - 10px);
    	height: 36vh;
	}
</style>
	<script>
		var imgpath = "./resources/img/slider/";
		var resimler = [imgpath+"1.jpg", imgpath+"2.jpg"];
		var mesajlar = [["1515'ten beri değişmeyen lezzet","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."],["Lokumcu Baba","Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]
		var indexer = 0;
		$(document).ready(function(){
			for (i = 0; i < resimler.length; i++){
				if(i == 0) $( "#slider" ).append( "<div align=\"center\" id=\"slide"+i+"\" class=\"slides\" style=\"background-image:url("+resimler[i]+");\">"+"<h2>"+mesajlar[i][0]+"</h2><font class=\"sldmsg\">"+mesajlar[i][1]+"</font></div>" ); else $( "#slider" ).append( "<div align=\"center\" id=\"slide"+i+"\" class=\"slides\" style=\"display:none; background-image:url("+resimler[i]+");\">"+"<h2>"+mesajlar[i][0]+"</h2><font class=\"sldmsg\">"+mesajlar[i][1]+"</font></div>" );
			}
		});
		function startslide(){
			$('#slide'+indexer).fadeOut(700);
			if(indexer == resimler.length-1) indexer = -1;
			$('#slide'+(indexer+1)).fadeIn(700);
			indexer++;
		}
		var slideinterval = setInterval(startslide,8000);
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.0.47/jquery.fancybox.min.js"></script>
</head>
<body>
<div id="mobmenu">
	<div><i style="color:#6b6b6b;" class="fa fa-phone-square" aria-hidden="true"></i> <a href="#">Tel : +90 53X XXX XXXX</a></div>
	<i onclick="menutoggle();" class="menubutton fa fa-bars" aria-hidden="true"></i>
<ul style="display:none;" id="mobmenuexp">
	<li onclick="return; go('./');">Anasayfa</li>
	<li onclick="go('./bayii-kayit');">Bayii Kayıt</li>
	<li id="mobchildmenu">down menu<i style="margin-left: 7px;" class="fa fa-caret-down" aria-hidden="true"></i></li>
	<li style="display: none;"><div onclick="return; go('./');" class="mobchilds">link</div><div onclick="return; go('./');" class="mobchilds">link</div><div onclick="return; go('./');" class="mobchilds">link</div><div onclick="return; go('./');" class="mobchilds">link</div></li>
	<li onclick="return; go('./');">link</li>
	<li onclick="return; go('./');">link</li>
</ul>
</div>

<div id="mobmenuspanner"></div>
<div id="header">
	<div id="logo"><img src="./resources/img/logo.png"></div>
	<div id="menu">
		<div id="socialtags">
			<div>
				<div><i style="color:#45bd49;" class="fa fa-phone-square" aria-hidden="true"></i> Telefon : +90 53X XXX XXXX</div>
			</div>
		</div>
		<div id="menucontent">
			<a href="./"><i class="fa fa-home menu-font" aria-hidden="true"></i> Anasayfa</a>
			<a href="./bayii-kayit"><i class="fa fa-user menu-font" aria-hidden="true"></i> Bayii Kayıt</a>
			<div><i class="fa fa-file-text menu-font" aria-hidden="true"></i> down menu<div><a href="./">link</a><a href="./">link</a><a href="./">link</a><a href="./">link</a></div></div>
			<a href="./"><i class="fa fa-picture-o menu-font" aria-hidden="true"></i> link</a>
			<a href="./"><i class="fa fa-map-marker menu-font" aria-hidden="true"></i> link</a>
		</div>
	</div>
</div><div class="mainpage" id="slider">
</div>
<div class="mainpage" id="content">
	<h1>Lokumcu Baba - 1515'ten beri değişmeyen lezzet</h1><hr>
	<div style="display:block;"><div style="display:table-cell;padding-right:20px;"><img style="width:300px;border-radius:20px;" alt="syntax bender" src="./resources/img/lokum1.jpg"></div><div style="display:table-cell;vertical-align:middle;"><h3 class="header-normal">Lokum</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae. Ac placerat vestibulum lectus mauris ultrices eros in. Ullamcorper malesuada proin libero nunc consequat. Purus in massa tempor nec. Aliquam faucibus purus in massa tempor nec. Tristique magna sit amet purus gravida quis. Id aliquet risus feugiat in ante metus. Tristique nulla aliquet enim tortor at auctor.</p></div></div>
	<div style="display:block;"><div style="display:table-cell;vertical-align:middle;"><h3 class="header-normal">Şekerleme</h3><p>Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Elit sed vulputate mi sit amet mauris commodo. Dictumst quisque sagittis purus sit. Feugiat in ante metus dictum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Imperdiet dui accumsan sit amet nulla facilisi morbi. Quis vel eros donec ac odio tempor orci dapibus. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p></div><div style="display:table-cell;padding-left:20px;"><img style="width:300px;border-radius:20px;" alt="syntax bender" src="./resources/img/lokum2.jpg"></div></div>
	<div style="display:block;"><div style="display:table-cell;padding-right:20px;"><img style="width:300px;height:240px; border-radius:20px;" alt="syntax bender" src="./resources/img/lokum3.jpg"></div><div style="display:table-cell;vertical-align:middle;"><h3 class="header-normal">Baklava</h3><p>Egestas sed sed risus pretium. Scelerisque eleifend donec pretium vulputate sapien nec. Ut morbi tincidunt augue interdum. Dictum sit amet justo donec enim. Aliquet enim tortor at auctor. In hac habitasse platea dictumst vestibulum. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Semper risus in hendrerit gravida rutrum. Scelerisque eleifend donec pretium vulputate sapien.</p></div></div>
	<div style="display:block;"><div style="display:table-cell;vertical-align:middle;"><h3 class="header-normal">Kadayıf</h3><p>A scelerisque purus semper eget duis at. Morbi non arcu risus quis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Nunc mattis enim ut tellus elementum sagittis vitae. Viverra orci sagittis eu volutpat odio facilisis mauris. Non pulvinar neque laoreet suspendisse. Proin nibh nisl condimentum id venenatis. Vitae sapien pellentesque habitant morbi tristique senectus et netus.</p></div><div style="display:table-cell;padding-left:20px;"><img style="width:300px;border-radius:20px;" alt="syntax bender" src="./resources/img/lokum4.jpg"></div></div>
	<hr>
	<a class="gallery" data-fancybox="gallery" href="./resources/img/lokum1.jpg"><div><div style="background: url('./resources/img/lokum1.jpg') center center no-repeat;"></div></div></a><a class="gallery" data-fancybox="gallery" href="./resources/img/lokum4.jpg"><div><div style="background: url('./resources/img/lokum4.jpg') center center no-repeat;"></div></div></a>
	<hr>
</div>
<div align="center" id="footer">
	<div align="left">
		<nav>
			<a href="./">Anasayfa</a>
			<a href="./bayii-kayit">Bayii Kayıt</a>
			<a href="./">link</a>
			<a href="./">link</a>
		</nav>
	</div>
	<div><div>Lokumcu Baba ©</div><div>Tüm Hakları saklıdır.<br/>Designed by SyntaxBender</div></div>

	<div align="left">
	<table>
		<tr>
			<td><i class="fa fa-facebook-square" aria-hidden="true"></i></td>
			<td><a href="https://www.facebook.com/" target="_blank">Facebook</a></td>
		</tr>
		<tr>
			<td><i class="fa fa-instagram" aria-hidden="true"></i></td>
			<td><a href="https://www.youtube.com/" target="_blank">Instagram</a></td>
		</tr>
		<tr>
			<td><i class="fa fa-mobile" aria-hidden="true"></i></td>
			<td>+90 53X XXX XXXX</td>
		</tr>
	</table>
	</div>
</div>
