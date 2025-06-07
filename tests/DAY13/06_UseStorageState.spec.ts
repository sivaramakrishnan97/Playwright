import { test } from "@playwright/test";

test.use({storageState:"Data/LeafTape_login.json"})//cookies data until your lead creation


test(`Using info to Home Page`,async ({page}) => {
 await page.goto("http://leaftaps.com/crmsfa/control/main")

 await page.getByText("Leads",{exact:true}).click(); // Continue from your lead creation page 

})