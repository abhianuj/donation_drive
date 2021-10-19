package com.microservice.fundraiser.e2e;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertTrue;
import static org.testng.Assert.fail;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class InvalidLoginCredential {
	WebDriver driver;
	Helper helper;
	
	@BeforeClass
	 public void setUp() {
	      String path = System.getProperty("user.dir");
		  System.setProperty("webdriver.chrome.driver", path+"\\drivers\\ver_94\\chromedriver.exe");
		  System.setProperty("webdriver.chrome.whitelistedIps", "");
		  this.driver = new ChromeDriver();  
		  this.helper = new Helper(driver);
	 }
	
	@Test(description="Launches the site")
	  public void launchSite() throws InterruptedException{
		driver.get("http://localhost:3000");
	    assertEquals(driver.getTitle(), "React App");
	    Thread.sleep(2000);
	  }
	
	@Test(description="Enters Invalid login data")
	  public void invalidLoginData() throws InterruptedException {
		helper.goToLoginForm();
		helper.fillLoginFormDataAndSubmit("abhi@gmail.com", "something");
		Thread.sleep(1000);
		try {
			helper.assertLogoutButtonIsPresent();
			fail("able to login with invalid login credentials");
		} 
		catch (Exception e) {
			assertTrue(true);
		}
	  }
	
	@AfterClass  
	  public void after_class() throws InterruptedException  
	  {
		  Thread.sleep(1000);
	      System.out.println("Closing Browser");
	      driver.close();
	  }  
}
