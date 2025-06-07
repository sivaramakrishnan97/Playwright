
import {test} from '@playwright/test'


test.beforeAll('Before All', async()=>{
    
    console.log("Configure the test");

})

test.beforeEach('Before each', async()=>{
    
    console.log("Preparing test data from external file");

})

test('Learn Hookds 1', async({page})=>{
    
    await page.goto("https://www.google.com/")

})

test('Learn Hookds 2', async({page})=>{
    
    await page.goto("https://www.leafground.com/input.xhtml")

})


test.afterEach('After Each', async()=>{
    
    console.log("Collecting reports");

})

test.afterAll('After All', async()=>{
    
    console.log("Attaching reports in Jira");
    

})





/*

test.beforeAll(`Before all the test`,async () => {
    console.log("Configured for reports");
    
})

test.beforeEach(`Before each test`,async () => {
    console.log("Reading data from external file")   
})

test(`Hooks learning-test 1`,async ({page}) => {
    page.goto(`http://google.com`)    
})

test(`Hooks learning-test 2`,async ({page}) => {
    page.goto(`http://amazon.com`)    
})

test.afterEach(`After each test `,async () => {
    console.log("Collecting test results");    
})

test.afterAll(`After all the test`,async () => {
    console.log("Attach report to jira");
    
})


*/