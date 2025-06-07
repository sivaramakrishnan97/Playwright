import { test } from "@playwright/test";

test(`Get the storage state of Login Page`,async ({page}) => {

    page.goto(`http://leaftaps.com/opentaps/control/login`)
    await page.fill("#username",'demoSalesManager');
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    
    await page.click("text=CRM/SFA") // until lead create page


    await page.context().storageState({path:"Data/LeafTape_login.json"})
    
})