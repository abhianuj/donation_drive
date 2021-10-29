package com.microservice.fundraiser.e2e;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class NewTest {
	
	WebDriver driver;
	Helper helper;
	
	@BeforeClass
	 public void setUp() {
	      String path = System.getProperty("user.dir");
		  System.out.println(path);  
		  System.setProperty("webdriver.chrome.driver", path+"\\drivers\\ver_94\\chromedriver.exe");
		  System.setProperty("webdriver.chrome.whitelistedIps", "");
		  this.driver = new ChromeDriver();  
		  this.helper = new Helper(driver);
	 }
	  
	  @Test(description="Launches the site")
	  public void launchSite() throws InterruptedException{
		driver.get("http://localhost:3000");
		Thread.sleep(5000);
	    assertEquals(driver.getTitle(), "React App");
	  }
	  
	  @Test(description="Enters valid login data")
	  public void validateLoginData() throws Exception {
		helper.goToLoginForm();
		Thread.sleep(1000);
		helper.fillLoginFormDataAndSubmit("mukherjee.gourab1998@gmail.com", "nottellingyou");
		Thread.sleep(1000);
		helper.assertLogoutButtonIsPresent();
	  } 
	  
	  @AfterClass  
	  public void after_class() throws InterruptedException  
	  {
		  Thread.sleep(1000);
	      System.out.println("Closing Browser");
	      driver.close();
	  }  

}
