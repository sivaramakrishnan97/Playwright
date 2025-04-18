import {chromium, firefox, test} from '@playwright/test'

test(`Launch browser test`, async ({})=>{

// Creat a browser instance
const browser1 = await chromium.launch( {headless:false, channel:'chrome'})
// Create a browser context
const context1 = await browser1.newContext()
// Create a page
const page1 = await context1.newPage() 

// Launch the URL
await page1.goto("http://leaftaps.com/opentaps/control/main")

const url1 = await page1.url()
console.log(`the URL of the page is ${url1}`)

const title1 = await page1.title()
console.log(`the title of the page is ${title1}`)


// Launch website 2

//const browser2 = await chromium.launch( {headless:false, channel:'msedge'})
// const context2 = await browser1.newContext()
const page2 = await context1.newPage()  


await page2.goto("https://www.redbus.in")

const url2 = await page2.url()
console.log(`the URL of the page is ${url2}`)

const title2 = await page2.title()
console.log(`the title of the page is ${title2}`) 
 

// Launch website 3 - currently firefox is not working in my machine

/* const browser3 = await firefox.launch( {headless:false})
const context3 = await browser3.newContext()
const page3 = await context3.newPage()  

await page3.goto("https://www.flipkart.com")

const url3 = await page3.url()
console.log(`the URL of the page is ${url3}`)

const title3 = await page3.title()
console.log(`the title of the page is ${title3}`)  */



})


