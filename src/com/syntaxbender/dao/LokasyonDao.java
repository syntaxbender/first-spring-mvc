package com.syntaxbender.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class LokasyonDao {
	@Autowired
	DataSource datasource;

	@Autowired 
	JdbcTemplate jdbcTemplate;

	public HashMap<Integer,String> getVilayetler() {
		HashMap<Integer,String> vilayetler = new HashMap<Integer, String>();
		try {
			String sql = "select * from `vilayetler`";
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql);
			for (Map<String, Object> row : rows) {
				vilayetler.put((Integer) row.get("VilayetID"), row.get("VilayetAdi").toString());
			}
		}catch(Exception e){
			vilayetler.put(-1,"");
			e.printStackTrace();
		}
		return vilayetler;  
	}
	public HashMap<Integer,String> getIlceler(int VilayetID){
		HashMap<Integer,String> ilceler = new HashMap<Integer, String>();
		try {
			String sql = "select IlceID,IlceAdi from `ilceler` where VilayetID = ?";
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, VilayetID);
			for (Map<String, Object> row : rows) {
			ilceler.put((Integer) row.get("IlceID"), row.get("IlceAdi").toString());
			}
		}catch(Exception e){
			ilceler.put(-1, "");
			e.printStackTrace();
		}
		return ilceler;  
	}
	public HashMap<Integer,String> getMahalleler(int MahalleID) {
		HashMap<Integer,String> mahalleler = new HashMap<Integer, String>();
		try {
			String sql = "select MahalleID, MahalleAdi from `mahalleler` where IlceID = ?";
			List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql, MahalleID);
			for (Map<String, Object> row : rows) {
				mahalleler.put((Integer) row.get("MahalleID"), row.get("MahalleAdi").toString());
			}
		}catch(Exception e){
			mahalleler.put(-1, "");
			e.printStackTrace();
		}
		return mahalleler;  
	}
	public int existLocation(int VilayetID, int IlceID, int MahalleID) {
		try {
			String sql = "select count(*) from `vilayetler` as a inner join `ilceler` as b on a.VilayetID=b.VilayetID inner join `mahalleler` as c on c.IlceID=b.IlceID where a.VilayetID = ? and b.IlceID = ? and c.MahalleID = ?";
			int rows = jdbcTemplate.queryForObject(sql, new Object[] { VilayetID, IlceID, MahalleID}, Integer.class);
			return rows;
		}catch(Exception e){
			e.printStackTrace();
			return 0;
		}
	}
}
