import  {test}  from "@playwright/test";



test(`Tata cliq test`, async ({page})=>{

    await page.goto("https://www.tatacliq.com/")

    await page.locator("//div[text()='Brands']").hover()

    await page.getByRole('button', { name: 'Watches & Accessories button' }).hover();

    await page.locator("//div[text()='Casio'] ").click()

    await page.selectOption(".SelectBoxDesktop__hideSelect",{value:"isProductNew"});

    await page.waitForTimeout(5000)
    const loc = await page.locator("(//div[text()='Men'])[1]").click()
    
    //await loc.click()

    // Get all price elements
  const priceLocators = await page.locator('//div[@class="ProductDescription__priceHolder"]');

  console.log(priceLocators);
  
  const count = await priceLocators.count();
  for (let i = 0; i < count; i++) {
    const priceText = await priceLocators.nth(i).innerText();
    console.log(`Product ${i + 1} Price:`, priceText);
  }

  console.log(count);
  
    

    



    





})