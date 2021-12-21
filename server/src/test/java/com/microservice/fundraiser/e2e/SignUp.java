package com.microservice.fundraiser.e2e;

import static org.testng.Assert.assertEquals;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

import org.json.JSONException;
import org.json.JSONObject;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class SignUp {
	
	private HttpURLConnection http;
	
	@BeforeClass
	 public void setUp() throws Exception {
		URL url = new URL("http://localhost:8080/api/users");
		http = (HttpURLConnection) url.openConnection();
		http.setRequestMethod("POST");
		http.setDoOutput(true);
		http.setRequestProperty("Accept", "application/json");
		http.setRequestProperty("Content-Type", "application/json");
	 }
	
	@Test
	public void signUpUser() throws IOException, JSONException {
		
		JSONObject jsonPayload = this.getPayloadSignUpUser();
	    String sPayload = jsonPayload.toString();

		byte[] out = sPayload.getBytes(StandardCharsets.UTF_8);
		OutputStream stream = http.getOutputStream();
		stream.write(out);

		System.out.println(http.getResponseCode() + " " + http.getResponseMessage());
		assertEquals(http.getResponseCode(), 200);
	}
	
	@AfterClass  
	  public void after_class() throws InterruptedException  
	  {
		http.disconnect();
	  }  
	
	private JSONObject getPayloadSignUpUser() throws JSONException {
		  JSONObject jsonPayload = new JSONObject();
	      jsonPayload.put("firstName", "gourab");
	      jsonPayload.put("lastName", "mukherjee");
	      jsonPayload.put("email", "mukherjee.gourab1998@gmail.com");
	      jsonPayload.put("password", "nottellingyou");
	      
	      return jsonPayload;
	}
	
}
