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
(0, test_1.test)(`Tata cliq test`, (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto("https://www.tatacliq.com/");
    yield page.locator("//div[text()='Brands']").hover();
    yield page.getByRole('button', { name: 'Watches & Accessories button' }).hover();
    yield page.locator("//div[text()='Casio'] ").click();
    yield page.selectOption(".SelectBoxDesktop__hideSelect", { value: "isProductNew" });
    yield page.waitForTimeout(5000);
    const loc = yield page.locator("(//div[text()='Men'])[1]").click();
    //await loc.click()
    // Get all price elements
    const priceLocators = yield page.locator('//div[@class="ProductDescription__priceHolder"]');
    console.log(priceLocators);
    const count = yield priceLocators.count();
    for (let i = 0; i < count; i++) {
        const priceText = yield priceLocators.nth(i).innerText();
        console.log(`Product ${i + 1} Price:`, priceText);
    }
    console.log(count);
}));
