import { test } from "@playwright/test";
import { log, table } from "console";
import { markAsUncloneable } from "worker_threads";

test(`Marathon 2 dashboaard test`, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "sivasmash7272@agentforce.com");
    await page.fill("#password", "9585116710@Test")
    await page.click("#Login")

    await page.getByTitle("App Launcher").click()

    await page.locator('//button[@aria-label="View All Applications"]').click()

    await page.waitForTimeout(3000)

    await page.getByRole("combobox").fill("Dashboards")

    await page.waitForTimeout(5000)

    await page.locator("//mark[text()='Dashboards']").click()

    const table = await page.locator('//table[@aria-label="Recent Dashboards"]')

    await page.waitForTimeout(3000)

    const columns = await table.locator("thead tr th")
    console.log(await columns.count());

    const rows = await table.locator("tbody tr")
    console.log(await rows.count());

    const nameOfUser = await rows.locator('//a[@title="Salesforce Automation by siva"]/ancestor::th')

    console.log(await nameOfUser.innerText());

    await nameOfUser.click()

    // Create new dashboard

    await page.getByTitle("New Dashboard").click()

    await page.locator("#dashboardNameInput").fill("Hey Eveyone I'm here")

    await page.locator("#submitBtn").click()

    await page.locator('//button[text()="Save"]').click()

    await page.click('//button[text()="Done"]')




   })

   
test(`Marathon 2 New dashboaard test`, async ({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", "sivasmash7272@agentforce.com");
    await page.fill("#password", "9585116710@Test")
    await page.click("#Login")

    await page.getByTitle("App Launcher").click()

    await page.waitForTimeout(2000)

    await page.locator('//button[@aria-label="View All Applications"]').click()

    await page.waitForTimeout(2000)

    await page.getByRole("combobox").fill("Dashboards")

    await page.locator("//mark[text()='Dashboards']").click()

    // Create new dashboard

    await page.locator('//div[text()="New Dashboard"]').click()

    //await page.waitForTimeout(5000)

    //Frame

    const frameURL = page.frameLocator('(//iframe[@tabindex="0"])[1]')

    const nameInBox = await frameURL?.locator('//input[@id="dashboardNameInput"]')
    console.log(nameInBox);
    
    await nameInBox?.fill("Hey Eveyone I'm here 2.0")

    await frameURL?.locator("#submitBtn").click()

    //await page.locator('//button[text()="Save"]').click()


    //const frameURL2 = page.frameLocator('(//iframe[@tabindex="0"])[1]')

    await page.waitForTimeout(5000)

    await frameURL?.locator('//button[text()="Done"]').click()


    console.log("success");

    const createdDashboard = await frameURL.locator("//span[contains(text(),'Viewing as')]").innerText()
    
    console.log(createdDashboard);
    



   })

   


   




