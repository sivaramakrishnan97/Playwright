import { test } from "@playwright/test";


 test("Locator test", async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    console.log("Page title is: "+await page.title());
    
    await page.locator("//input[@id='username']").fill("democsr")
    
    await page.locator("//input[@id='password']").fill("crmsfa")
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator("//a[contains(text(),'CRM')]").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("//input[@id='createLeadForm_companyName']").fill("Genpact")
    await page.locator("//input[@id='createLeadForm_firstName']").fill("Siva")
    await page.locator("//input[@id='createLeadForm_lastName']").fill("D")


    await page.selectOption(`#createLeadForm_dataSourceId`, {value:'LEAD_COLDCALL'})

    await page.selectOption(`#createLeadForm_currencyUomId`, {label:'INR - Indian Rupee'})

    const sourceValue = await page.locator(`#createLeadForm_dataSourceId option:checked`).innerText();
    console.log(`The value of source ${sourceValue}`);

    const selectedCurrencyOption = await page.locator(`#createLeadForm_currencyUomId option:checked`).innerText()
    console.log(selectedCurrencyOption) 

    //get the value from the dropdown

    const currencyDropdownOptins = await page.locator(`#createLeadForm_currencyUomId>option`)
    const currencyDropdownOptinsCount = await currencyDropdownOptins.count()
    console.log(currencyDropdownOptinsCount);
    
   // await page.waitForTimeout(3000)

    for (let index = 0; index < currencyDropdownOptinsCount; index++) {
        console.log( await currencyDropdownOptins.nth(index).innerText());  

    }

    await page.locator("//input[@name='submitButton']").click()


})
