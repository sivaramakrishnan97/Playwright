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
(0, test_1.test)(`Learning Persistant Context`, () => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield test_1.chromium.launchPersistentContext(`./userdatadir`, { headless: false,
        httpCredentials: {
            username: "admin",
            password: "testleaf"
        }
    });
    // It will open two pages, 2nd pages is for persistentContext
    const page = yield context.newPage();
    const allPages = context.pages();
    console.log(allPages.length);
    yield allPages[0].goto(`https://leafground.com/auth.xhtml`);
    yield allPages[0].click(`//span[text()="Basic Auth"]`);
    yield context.close();
    // For the 2nd time username and password are not required
    const newContext = yield test_1.chromium.launchPersistentContext(`./userdatadir`, { headless: false,
        // no httpCredentials:{ }
    });
    const newPage = yield newContext.newPage();
    yield newPage.goto(`https://leafground.com/auth.xhtml`);
    yield newPage.click(`//span[text()="Basic Auth"]`);
}));
/* Notes:

Use Persistent Context in Playwright (to retain browser state like cookies, logins, etc.).

Perform Basic Authentication (username + password popup)

Reuse the stored browser session without needing to re-authenticate. */ 
