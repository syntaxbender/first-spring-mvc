package com.syntaxbender.controller;

import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.syntaxbender.dao.LokasyonDao;

@Controller
public class LokasyonController {
	@Autowired
	private LokasyonDao lokasyonDao;

	@RequestMapping(value = "/lokasyon/vilayetler", method = RequestMethod.GET)
	public @ResponseBody  HashMap<Integer,String> getVilayetler() {
		HashMap<Integer,String> returndata = lokasyonDao.getVilayetler();
		return returndata;
	}
	@RequestMapping(value = "/lokasyon/ilceler/{VilayetID:^(?:[0-9]+)$}", method = RequestMethod.GET)
	public @ResponseBody HashMap<Integer,String> getIlceler(@PathVariable("VilayetID") int VilayetID) {
		HashMap<Integer,String> returndata = lokasyonDao.getIlceler(VilayetID);
		return returndata;

	}
	@RequestMapping(value = "/lokasyon/mahalleler/{IlceID:^(?:[0-9]+)$}", method = RequestMethod.GET)
	public @ResponseBody HashMap<Integer,String> getMahalleler(@PathVariable("IlceID") int IlceID) {
		HashMap<Integer,String> returndata = lokasyonDao.getMahalleler(IlceID);
		return returndata;
	}
}
