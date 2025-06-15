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
exports.BasePage = void 0;
const test_1 = require("@playwright/test");
class BasePage {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
    }
    launchBrowser() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield test_1.chromium.launch({ headless: false });
            this.context = yield this.browser.newContext();
            this.page = yield this.context.newPage();
        });
    }
    getPage() {
        return this.page;
    }
    //Method to navigate to a specific URL
    navigateTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
        });
    }
    // Close the browser
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitForTimeout(3000);
            yield this.page.close();
        });
    }
}
exports.BasePage = BasePage;
/*

import { Browser, BrowserContext, chromium, Page } from "playwright";

export class BasePage{
//access modifier property name : type
   protected browser : Browser;
   protected context:BrowserContext;
   protected page:Page;

   constructor(){
    //this refers to the instance of the class
    this.browser=null as any;
    this.context=null as any;
    this.page=null as any;
   }

   public async initialize():Promise<void> {
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    
   }

   //Method to navigate to a specific URL

   public async navigateTo(url:string):Promise<void>{
    await this.page.goto(url);
   }

   public async close(): Promise<void>{
    await this.page.waitForTimeout(3000)
    await this.page.close()
   }
}

*/ 
