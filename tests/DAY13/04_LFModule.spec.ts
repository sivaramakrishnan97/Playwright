import { test } from "@playwright/test";

import fs from "fs";

let loginData:any[]

test.beforeAll("Read datas from JSON", async({page})=>{



})






/*


import { test, TestInfo } from "@playwright/test";
import fs from "fs";
let loginData:any[]

test.beforeAll(`Reading data from JSON`, async () => {

   loginData =  JSON.parse(fs.readFileSync("Data/login.json",'utf-8'));
    
})

test.use({storageState:"Data/st_login.json"})

test.beforeEach(`PreCondition for Modules`,async ({page}) => {
    page.goto(`http://leaftaps.com/opentaps/control/login`)
    await page.click("text=CRM/SFA");

})

test(`Lead Module`,async ({page}) => {
    await page.getByText("Leads",{exact:true}).click();
    await page.getByText("Create Lead",{exact:true}).click()
    
})

test(`Account Module`,async ({page}) => {
    await page.getByText("Accounts",{exact:true}).click();
    await page.getByText("Create Account",{exact:true}).click()
    
})

test.afterEach(`Leaftaps Module Result`,async ({page},info:TestInfo) => {

    console.log(info.status);
    console.log(info.title);
    console.log(await page.title());
    
    
    
})  


*/
