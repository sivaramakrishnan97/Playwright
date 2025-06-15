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
(0, test_1.test)(`Marathon 2 dashboaard test`, (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://login.salesforce.com/");
    yield page.fill("#username", "sivasmash7272@agentforce.com");
    yield page.fill("#password", "9585116710@Test");
    yield page.click("#Login");
    yield page.getByTitle("App Launcher").click();
    yield page.locator('//button[@aria-label="View All Applications"]').click();
    yield page.waitForTimeout(3000);
    yield page.getByRole("combobox").fill("Dashboards");
    yield page.waitForTimeout(5000);
    yield page.locator("//mark[text()='Dashboards']").click();
    const table = yield page.locator('//table[@aria-label="Recent Dashboards"]');
    yield page.waitForTimeout(3000);
    const columns = yield table.locator("thead tr th");
    console.log(yield columns.count());
    const rows = yield table.locator("tbody tr");
    console.log(yield rows.count());
    const nameOfUser = yield rows.locator('//a[@title="Salesforce Automation by siva"]/ancestor::th');
    console.log(yield nameOfUser.innerText());
    yield nameOfUser.click();
    // Create new dashboard
    yield page.getByTitle("New Dashboard").click();
    yield page.locator("#dashboardNameInput").fill("Hey Eveyone I'm here");
    yield page.locator("#submitBtn").click();
    yield page.locator('//button[text()="Save"]').click();
    yield page.click('//button[text()="Done"]');
}));
(0, test_1.test)(`Marathon 2 New dashboaard test`, (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://login.salesforce.com/");
    yield page.fill("#username", "sivasmash7272@agentforce.com");
    yield page.fill("#password", "9585116710@Test");
    yield page.click("#Login");
    yield page.getByTitle("App Launcher").click();
    yield page.waitForTimeout(2000);
    yield page.locator('//button[@aria-label="View All Applications"]').click();
    yield page.waitForTimeout(2000);
    yield page.getByRole("combobox").fill("Dashboards");
    yield page.locator("//mark[text()='Dashboards']").click();
    // Create new dashboard
    yield page.locator('//div[text()="New Dashboard"]').click();
    //await page.waitForTimeout(5000)
    //Frame
    const frameURL = page.frameLocator('(//iframe[@tabindex="0"])[1]');
    const nameInBox = yield (frameURL === null || frameURL === void 0 ? void 0 : frameURL.locator('//input[@id="dashboardNameInput"]'));
    console.log(nameInBox);
    yield (nameInBox === null || nameInBox === void 0 ? void 0 : nameInBox.fill("Hey Eveyone I'm here 2.0"));
    yield (frameURL === null || frameURL === void 0 ? void 0 : frameURL.locator("#submitBtn").click());
    //await page.locator('//button[text()="Save"]').click()
    //const frameURL2 = page.frameLocator('(//iframe[@tabindex="0"])[1]')
    yield page.waitForTimeout(5000);
    yield (frameURL === null || frameURL === void 0 ? void 0 : frameURL.locator('//button[text()="Done"]').click());
    console.log("success");
    const createdDashboard = yield frameURL.locator("//span[contains(text(),'Viewing as')]").innerText();
    console.log(createdDashboard);
}));
