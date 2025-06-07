import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { promises } from "dns";

export  class BasePage {

    protected browser : Browser;
    protected context:BrowserContext;
    public page:Page;


    constructor() {

    this.browser=null as any;
    this.context=null as any;
    this.page=null as any
    }

    public async launchBrowser():Promise<void>{
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    }

    public getPage() {
      return this.page;
    }

    //Method to navigate to a specific URL
    public async navigateTo(url:string):Promise<void>{
    await this.page.goto(url);
    }

    // Close the browser
   public async close(): Promise<void>{
    await this.page.waitForTimeout(3000)
    await this.page.close()
   }


}










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