package com.syntaxbender.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.servlet.ModelAndView;

@Controller
public class AnasayfaController {
	  @RequestMapping(value = "/", method = RequestMethod.GET)
	  public @ResponseBody ModelAndView showMain() {
		  ModelAndView mav = new ModelAndView("AnaSayfa");
		  return mav;
	  }
}
