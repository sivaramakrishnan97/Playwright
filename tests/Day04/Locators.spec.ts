import { test } from "@playwright/test";


 test("Locator test", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    console.log("Page title is: "+await page.title());
    
    // Locate and fill data in user name field
    await page.locator("//input[@id='username']").fill("democsr")
    
   // Locate and fill data in password field
    await page.locator("//input[@id='password']").fill("crmsfa")

    // click on submit button
    await page.locator("//input[@class='decorativeSubmit']").click()

    // Click on CRMSFA 
    await page.locator("//a[contains(text(),'CRM')]").click()

    // Click on create lead
    await page.locator("//a[text()='Create Lead']").click()

    // enter company name
    await page.locator("//input[@id='createLeadForm_companyName']").fill("Genpact")

     // Enter first name
     await page.locator("//input[@id='createLeadForm_firstName']").fill("Siva")

     // Enter last name
     await page.locator("//input[@id='createLeadForm_lastName']").fill("D")


     

     // Click create lead button
    await page.locator("//input[@name='submitButton']").click()




})
