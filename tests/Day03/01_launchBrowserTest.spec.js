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
    // Creat a browser instance
    const browser1 = yield test_1.chromium.launch({ headless: false, channel: 'chrome' });
    // Create a browser context
    const context1 = yield browser1.newContext();
    // Create a page
    const page1 = yield context1.newPage();
    // Launch the URL
    yield page1.goto("http://leaftaps.com/opentaps/control/main");
    const url1 = yield page1.url();
    console.log(`the URL of the page is ${url1}`);
    const title1 = yield page1.title();
    console.log(`the title of the page is ${title1}`);
    // Launch website 2
    //const browser2 = await chromium.launch( {headless:false, channel:'msedge'})
    // const context2 = await browser1.newContext()
    const page2 = yield context1.newPage();
    yield page2.goto("https://www.redbus.in");
    const url2 = yield page2.url();
    console.log(`the URL of the page is ${url2}`);
    const title2 = yield page2.title();
    console.log(`the title of the page is ${title2}`);
}));
