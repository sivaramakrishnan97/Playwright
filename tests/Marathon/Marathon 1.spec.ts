import { test } from "@playwright/test";
import { table } from "console";

test(`Marathon 1 test`, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "sivasmash7272@agentforce.com");
    await page.fill("#password", "9585116710@Test")
    await page.click("#Login")

    await page.getByTitle("App Launcher").click()

    await page.getByPlaceholder("Search apps and items...").fill("leads")
    await page.getByPlaceholder("Search apps and items...").press('Enter')

    await page.click("#Lead")

    await page.waitForTimeout(2000)

   const table = await page.getByRole("grid") 

   await page.waitForTimeout(2000)

   const columns = await table.locator("thead tr th")  // here we user thead->tr->th to get all the columns
   //console.log(await columns.innerText());
   console.log(await columns.count());

   const rows = await table.locator("tbody tr")        // Here we use tbody->tr because we need row only
   console.log(await rows.count());


    const machedRow = rows.filter({
    has: page.locator('//tr[@data-row-number="2"]'),
    hasText: "Test_Siva Braun"
     })

     console.log(machedRow);
     
     await machedRow.getByTitle('Test_Siva Braun', { exact: true }).click();
    
     
     //locator("//span[text()='Test_Siva Braun']").click();



   })

   

   

//    const machedRow = rows.filter({
//     has.page.locator('td'), hasText:Test_Siva Braun})
//    })

//    await machedRow.locator

//     await page.click("//span[text()='Show more actions']")

//     await page.click("//Delete']")

//    await page.click("//button[@title='Delete']")

//    await page.fill("//button[text()='Search...']", "Test_Siva Braun")

//    // await page.locator("//button[text()='Search...']").press('Enter')

//    await page.locator("//span[contains(text(), 'Show more results')]").innerText();




