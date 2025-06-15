"use strict";
class Browser {
    constructor(browserType) {
        this.browserType = browserType;
    }
    logsession() {
        console.log(`Browser session for ${this.browserType}`);
    }
    loggedTime() {
        console.log(`loggedTime for ${this.browserType}`);
    }
    launchBrowser() {
        this.logsession(); // private method can be called within the same class
        return `Launching ${this.browserType} browser`;
    }
}
const browserSession = new Browser(`edge`);
console.log(browserSession.launchBrowser());
class test extends Browser {
    loggedTime() {
    }
}
const t = new test("chromium");
console.log(t.loggedTime);
//2
class BaseeClass {
    constructor(browserType) {
        this.browserType = browserType;
    }
    logSession() {
        console.log(`This is from the base class`);
        ;
        console.log(`Browser Session for ${this.browserType}`);
    }
    launchBrowser() {
        return ` Launching ${this.browserType} browser`;
    }
}
class DashboardPagee extends BaseeClass {
    logSession() {
        console.log(`this is from the Dashboard page`);
    }
    captureScreenshot() {
        console.log(`Capturing screenshot in ${this.browserType}`);
    }
}
const dashboard1 = new DashboardPagee('chromium');
dashboard1.captureScreenshot();
/*

Note:

What's happening?
browserType is private, so it can only be used inside the class.

logSession() is private, so it’s also only callable inside the class.

launchBrowser() is public, so you can call it from outside the class.

Outside code can’t do something like browserSession.logSession()


Note : 2

browserType is protected, so:

❌ Cannot be accessed outside the class like obj.browserType

✅ But child classes (like DashboardPage) can access it

Same with logSession() – it could also be used in child classes if needed

launchBrowser() is public, so it's accessible from outside

*/
