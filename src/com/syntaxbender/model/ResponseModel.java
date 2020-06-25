package com.syntaxbender.model;

import java.util.List;

public class ResponseModel {
	private int status;
	private List<String> message;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public List<String> getMessage() {
		return message;
	}
	public void setMessage(List<String> message) {
		this.message = message;
	}
}
