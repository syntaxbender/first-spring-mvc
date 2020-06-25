package com.syntaxbender.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.servlet.ModelAndView;

import com.syntaxbender.dao.BasvuruDao;
import com.syntaxbender.dao.LokasyonDao;
import com.syntaxbender.model.BasvuruModel;
import com.syntaxbender.model.ResponseModel;

@Controller
public class BasvuruController {
	@Autowired
	private BasvuruDao basvuruDao;
	
	@Autowired
	private LokasyonDao lokasyonDao;
	
	@RequestMapping(value = "/bayii-kayit", method = RequestMethod.POST)
	public @ResponseBody ResponseModel doRegister(HttpServletRequest request, @Valid @ModelAttribute("bayii-bilgileri") BasvuruModel basvuru, BindingResult br) {
		if(br.hasErrors()){
		    List<FieldError> errors = br.getFieldErrors();
		    List<String> responseList = new ArrayList<>();
		    for (FieldError error : errors ) {
		    	responseList.add(error.getDefaultMessage());
		    }
			ResponseModel registerResponse = new ResponseModel();
			registerResponse.setStatus(0);
			registerResponse.setMessage(responseList);
			return registerResponse;
		}else{
			int VilayetID = Integer.parseInt(basvuru.getVilayet());
			int IlceID = Integer.parseInt(basvuru.getIlce());
			int MahalleID = Integer.parseInt(basvuru.getMahalle());
			int locationIsExist = lokasyonDao.existLocation(VilayetID, IlceID, MahalleID);
			boolean checkKimlik = this.kimlikKontrol(basvuru.getTCKimlik());
			ResponseModel registerResponse = new ResponseModel();
			List<String> responseList = new ArrayList<>();
			if(locationIsExist>0 && checkKimlik == true) {
				String IPAdresi = "";
				if (request != null) {
					IPAdresi = request.getHeader("X-FORWARDED-FOR");
					if (IPAdresi == null || "".equals(IPAdresi)) {
						IPAdresi = request.getRemoteAddr();
					}
				}
				basvuru.setIPAdresi(IPAdresi);
				int returndata = basvuruDao.register(basvuru);
				if(returndata != 0) {
					registerResponse.setStatus(1);
					responseList.add("Bayiilik başvurunuz başarıyla alınmıştır. Bizi tercih ettiğiniz için teşekkürler.");
					registerResponse.setMessage(responseList);
				}else{
					registerResponse.setStatus(0);
					responseList.add("Sistemsel bir hata oluştu, kaydınız alınamadı. Lütfen en kısa zamanda tekrar deneyiniz.");
					registerResponse.setMessage(responseList);
				}
			}else{
				registerResponse.setStatus(0);
				responseList.add("Sistemsel bir hata oluştu, kaydınız alınamadı. Lütfen en kısa zamanda tekrar deneyiniz.");
				registerResponse.setMessage(responseList);
			}
			return registerResponse;
		}
	}
	@RequestMapping(value = "/bayii-kayit", method = RequestMethod.GET)
	public @ResponseBody ModelAndView showRegister() {
		ModelAndView mav = new ModelAndView("BayiiKayit");
		//mav.addObject("user", new User());
		return mav;
	}
	public boolean kimlikKontrol(String numara) {
		int tek = 0;
		int cift = 0;
		if (numara.charAt(0) == '0') return false;
		tek = Integer.parseInt(String.valueOf(numara.charAt(0)))+Integer.parseInt(String.valueOf(numara.charAt(2)))+Integer.parseInt(String.valueOf(numara.charAt(4)))+Integer.parseInt(String.valueOf(numara.charAt(6)))+Integer.parseInt(String.valueOf(numara.charAt(8)));
		cift = Integer.parseInt(String.valueOf(numara.charAt(1)))+Integer.parseInt(String.valueOf(numara.charAt(3)))+Integer.parseInt(String.valueOf(numara.charAt(5)))+Integer.parseInt(String.valueOf(numara.charAt(7)));
		int sonuc1 = ((tek*7)-cift)%10;
		int sonuc2 = ((tek*7)+(cift*9))%10;
		int sonuc3 = 0;
		for (int i = 0; i < 10; i++) {
			sonuc3 += Integer.parseInt(String.valueOf(numara.charAt(i)));
		}
		sonuc3 = sonuc3%10;
		int sonuc4 = (tek*8)%10;
		if (sonuc1 != Integer.parseInt(String.valueOf(numara.charAt(9)))) return false;
		if (sonuc2 != Integer.parseInt(String.valueOf(numara.charAt(9)))) return false;
		if (sonuc3 != Integer.parseInt(String.valueOf(numara.charAt(10)))) return false;
		if (sonuc4 != Integer.parseInt(String.valueOf(numara.charAt(10)))) return false;
		return true;
	}
}
