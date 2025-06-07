import {chromium, firefox, test} from '@playwright/test'
import { channel } from 'process';

test(`Launch browser test`, async ({})=>{

// Launch website 
/* 
const browserr = await chromium.launch({headless:false, channel: "chrome"});
const context = await browser.newContext()                                          // context = window
const page = await context.newPage()                                                // Page = Tab

await page.goto("https://www.flipkart.com")

const url= await page.url()
console.log(`the URL of the page is ${url}`)

const title = await page.title()
console.log(`the title of the page is ${title}`) 
 */


})


test('browserTest', async()=>{
test.setTimeout(60000)
const browserr = await chromium.launch({headless:false, channel: "msedge"});

const contextt = await browserr.newContext()

const newPagee = await contextt.newPage();

await newPagee.goto("https://www.flipkart.com")

console.log("Browser launched");


})


