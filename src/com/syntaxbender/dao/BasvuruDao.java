package com.syntaxbender.dao;


import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.syntaxbender.model.BasvuruModel;

public class BasvuruDao {
	  @Autowired
	  DataSource datasource;

	  @Autowired 
	  JdbcTemplate jdbcTemplate;

	  public  int register(BasvuruModel basvuru) {
		  try {
			  String sql = "insert into `basvurular` (`AdSoyad`, `TCKimlik`, `Telefon`, `Eposta`, `DogumTarihi`, `VilayetID`, `IlceID`, `MahalleID`, `Adres`, `OncedenPerakende`, `TercihSebebi`, `YatirimMiktari`, `Opsiyonel`,`IPAdresi`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			  int test = jdbcTemplate.update(sql, basvuru.getAdSoyad(), basvuru.getTCKimlik(), basvuru.getTelefon(), basvuru.getEposta(), basvuru.getDogumTarihi(), basvuru.getVilayet(), basvuru.getIlce(), basvuru.getMahalle(), basvuru.getAdres(), basvuru.getOncedenPerakende(), basvuru.getTercihSebebi(), basvuru.getYatirimMiktari(), basvuru.getOpsiyonel(), basvuru.getIPAdresi());
			  return test;
		  }catch(Exception e){
		      e.printStackTrace();
		      return 0;
		  }
		  
	  }
}
