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
(0, test_1.test)(`Marathon 1 test`, (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://login.salesforce.com/");
    yield page.fill("#username", "sivasmash7272@agentforce.com");
    yield page.fill("#password", "9585116710@Test");
    yield page.click("#Login");
    yield page.getByTitle("App Launcher").click();
    yield page.getByPlaceholder("Search apps and items...").fill("leads");
    yield page.getByPlaceholder("Search apps and items...").press('Enter');
    yield page.click("#Lead");
    yield page.waitForTimeout(2000);
    const table = yield page.getByRole("grid");
    yield page.waitForTimeout(2000);
    const columns = yield table.locator("thead tr th"); // here we user thead->tr->th to get all the columns
    //console.log(await columns.innerText());
    console.log(yield columns.count());
    const rows = yield table.locator("tbody tr"); // Here we use tbody->tr because we need row only
    console.log(yield rows.count());
    const machedRow = rows.filter({
        has: page.locator('//tr[@data-row-number="2"]'),
        hasText: "Test_Siva Braun"
    });
    console.log(machedRow);
    yield machedRow.getByTitle('Test_Siva Braun', { exact: true }).click();
    //locator("//span[text()='Test_Siva Braun']").click();
}));
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
