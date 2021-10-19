package com.microservice.fundraiser.e2e;

import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Helper {

	String baseUrl = "http://localhost:3000";
	WebDriver driver;
	
	Helper(WebDriver driver) {
		this.driver = driver;
	}
	
	public void navigateToAuth() {
		driver.get(baseUrl + "/auth");
	}
	
	public void goToLoginForm() {
		driver.findElement(By.linkText("LOGIN")).click();
		driver.findElement(By.cssSelector("div:nth-child(1) > button:nth-child(2)")).click();
	}
	
	public void fillLoginFormDataAndSubmit(String email, String password) {
		driver.findElement(By.cssSelector("div:nth-child(1) > .MuiFormControl-root .MuiInput-input")).sendKeys(email);
		driver.findElement(By.cssSelector("div:nth-child(3) > .MuiFormControl-root .MuiInput-input")).sendKeys(password);	
		driver.findElement(By.cssSelector("div:nth-child(1) > div:nth-child(4) > button")).click();			
	}
	
	public void fillSignupFormData(String firstName, String lastName, String email, String password) {
		driver.findElement(By.cssSelector("div:nth-child(1) > .MuiFormControl-root:nth-child(1) .MuiInput-input")).sendKeys(firstName);
	}
	
	public void assertLogoutButtonIsPresent() throws Exception {
		if( driver.findElement(By.cssSelector("button:nth-child(4) > a")).isDisplayed()) {
			assertTrue(true);
		} else {
			throw new Exception();
		}
	}
}
