"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../Pages/LoginPage");
const HomePage_1 = require("./HomePage");
(0, test_1.test)(`Test to login using valid credentials`, () => __awaiter(void 0, void 0, void 0, function* () {
    //create an object for the Login page cause i have extended my loginpage with baseclass you dont need to create the object
    const loginPage = new LoginPage_1.LoginPage();
    yield loginPage.launchBrowser();
    yield loginPage.navigateTo("https://login.salesforce.com");
    yield loginPage.login("sivasmash7272@agentforce.com", "9585116710@Test");
    yield loginPage.close();
}));
(0, test_1.test)(`Test for Check lead`, () => __awaiter(void 0, void 0, void 0, function* () {
    //create an object for the Login page cause i have extended my loginpage with baseclass you dont need to create the object
    const loginPage = new LoginPage_1.LoginPage();
    yield loginPage.launchBrowser();
    yield loginPage.navigateTo("https://login.salesforce.com");
    yield loginPage.login("sivasmash7272@agentforce.com", "9585116710@Test");
    const hpage = new HomePage_1.Homepage(loginPage.getPage());
    yield hpage.SearchLeadInApplauncher();
    yield loginPage.close();
}));
