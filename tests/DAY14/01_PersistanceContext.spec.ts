import { chromium, test } from "@playwright/test";


test(`Learning Persistant Context`,async () => {
    const context= await chromium.launchPersistentContext(`./userdatadir`, {headless:false,
    httpCredentials:{
    username:"admin",
    password:"testleaf"
    }
    })

    // It will open two pages, 2nd pages is for persistentContext

    const page=await context.newPage()

    const allPages = context.pages()
    console.log(allPages.length);

    await allPages[0].goto(`https://leafground.com/auth.xhtml`)
    await allPages[0].click(`//span[text()="Basic Auth"]`);

    await context.close();

    // For the 2nd time username and password are not required
    
    const newContext=await chromium.launchPersistentContext(`./userdatadir`, {headless:false,
    // no httpCredentials:{ }
    })


    const newPage= await newContext.newPage();
    await newPage.goto(`https://leafground.com/auth.xhtml`);
    await newPage.click(`//span[text()="Basic Auth"]`);

    })



/* Notes:

Use Persistent Context in Playwright (to retain browser state like cookies, logins, etc.).

Perform Basic Authentication (username + password popup)

Reuse the stored browser session without needing to re-authenticate. */