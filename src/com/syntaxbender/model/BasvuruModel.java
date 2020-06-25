package com.syntaxbender.model;

import javax.validation.constraints.Pattern;

public class BasvuruModel {
	@Pattern(regexp="^([A-Za-zĞÜŞİÖÇğüşıöç ]){4,70}$",message="Ad soyadınızı kontrol ediniz.")  
	private String AdSoyad;
	
	@Pattern(regexp="^([0-9]){11}$",message="Kimlik numaranızı kontrol ediniz.")  
	private String TCKimlik;
	
	@Pattern(regexp="^([0-9]){10}$",message="Telefon numaranızı kontrol ediniz.")  
	private String Telefon;
	
	@Pattern(regexp="^(?=.{6,85}$)(([A-Za-z0-9.-_]+)@([A-Za-z0-9.-_]+)\\.([A-Za-z]+))$",message="E-postanızı kontrol ediniz.")  
	private String Eposta;
	
	@Pattern(regexp="^(19([0-9]{2})|20([0-9]{2}))-(0*([1-9]{1})|1([012]{1}))-(([0]{1})([1-9]{1})|([1-9]{1})|([12]{1})([0-9]{0,1})|3([01]{1}))$",message="Doğum tarihinizi kontrol ediniz.")  
	private String DogumTarihi;
	
	@Pattern(regexp="^([0-9])+$",message="İliniz için geçersiz bir seçim yaptınız.")
	private String Vilayet;
	
	@Pattern(regexp="^([0-9])+$",message="İlçeniz için geçersiz bir seçim yaptınız.")
	private String Ilce;
	
	@Pattern(regexp="^([0-9])+$",message="Mahalleniz için geçersiz bir seçim yaptınız.")
	private String Mahalle;
	
	@Pattern(regexp="^(.){1,1000}$",message="Adres alanı zorunludur. (Max 1000 karakter)")  
	private String Adres;
	
	@Pattern(regexp="^(.){1,1000}$",message="Önceden perakende ticareti yaptıysanız belirtiniz. Yapmadıysanız hayır olarak doldurunuz. (Max 1000 karakter)")  
	private String OncedenPerakende;
	
	@Pattern(regexp="^(.){1,1000}$",message="Bizi tercih etme sebebinizden kısaca bahsediniz. (Max 1000 karakter)")  
	private String TercihSebebi;
	
	@Pattern(regexp="^(.){1,1000}$",message="Yatırım miktarınız hakkında kısaca bahsediniz. (Max 1000 karakter)")
	private String YatirimMiktari;
	
	@Pattern(regexp="^(.){0,1000}$",message="Eklemek istediğiniz alan için (Max 1000 karakter)")  
	private String Opsiyonel;
	
	private String IPAdresi;
	
	public String getAdSoyad() {
		return AdSoyad;
	}
	public void setAdSoyad(String adSoyad) {
		this.AdSoyad = adSoyad;
	}
	public String getTCKimlik() {
		return TCKimlik;
	}
	public void setTCKimlik(String tCKimlik) {
		this.TCKimlik = tCKimlik;
	}
	public String getTelefon() {
		return Telefon;
	}
	public void setTelefon(String telefon) {
		this.Telefon = telefon;
	}
	public String getEposta() {
		return Eposta;
	}
	public void setEposta(String eposta) {
		this.Eposta = eposta;
	}
	public String getDogumTarihi() {
		return DogumTarihi;
	}
	public void setDogumTarihi(String dogumTarihi) {
		this.DogumTarihi = dogumTarihi;
	}
	public String getAdres() {
		return Adres;
	}
	public void setAdres(String adres) {
		this.Adres = adres;
	}
	public String getOncedenPerakende() {
		return OncedenPerakende;
	}
	public void setOncedenPerakende(String oncedenPerakende) {
		this.OncedenPerakende = oncedenPerakende;
	}
	public String getTercihSebebi() {
		return TercihSebebi;
	}
	public void setTercihSebebi(String tercihSebebi) {
		this.TercihSebebi = tercihSebebi;
	}
	public String getYatirimMiktari() {
		return YatirimMiktari;
	}
	public void setYatirimMiktari(String yatirimMiktari) {
		this.YatirimMiktari = yatirimMiktari;
	}
	public String getOpsiyonel() {
		return Opsiyonel;
	}
	public void setOpsiyonel(String opsiyonel) {
		this.Opsiyonel = opsiyonel;
	}
	public String getVilayet() {
		return Vilayet;
	}
	public void setVilayet(String vilayet) {
		this.Vilayet = vilayet;
	}
	public String getIlce() {
		return Ilce;
	}
	public void setIlce(String ilce) {
		this.Ilce = ilce;
	}
	public String getMahalle() {
		return Mahalle;
	}
	public void setMahalle(String mahalle) {
		this.Mahalle = mahalle;
	}
	public String getIPAdresi() {
		return IPAdresi;
	}
	public void setIPAdresi(String ipadresi) {
		this.IPAdresi = ipadresi;
	}
}
