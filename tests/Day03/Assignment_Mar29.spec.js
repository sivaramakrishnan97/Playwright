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
(0, test_1.test)(`Launch browser test`, (_a) => __awaiter(void 0, [_a], void 0, function* ({}) {
    // Launch website 
    const browserr = yield test_1.chromium.launch({ headless: false, channel: "chrome" });
    const context = yield browserr.newContext(); // context = window
    const page = yield context.newPage(); // Page = Tab
    yield page.goto("https://www.flipkart.com");
    const url = yield page.url();
    console.log(`the URL of the page is ${url}`);
    const title = yield page.title();
    console.log(`the title of the page is ${title}`);
}));
