
import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { Homepage } from "./HomePage";


test(`Test to login using valid credentials`,async () => {

//create an object for the Login page cause i have extended my loginpage with baseclass you dont need to create the object
const loginPage = new LoginPage();
await loginPage.launchBrowser();
await loginPage.navigateTo("https://login.salesforce.com");
await loginPage.login("sivasmash7272@agentforce.com","9585116710@Test");
await loginPage.close();

})

test(`Test for Check lead`,async () => {

    //create an object for the Login page cause i have extended my loginpage with baseclass you dont need to create the object
    const loginPage = new LoginPage();
    await loginPage.launchBrowser();
    await loginPage.navigateTo("https://login.salesforce.com");
    await loginPage.login("sivasmash7272@agentforce.com","9585116710@Test");

    const hpage = new Homepage(loginPage.getPage());

    await hpage.SearchLeadInApplauncher()
    await loginPage.close();
    
    })