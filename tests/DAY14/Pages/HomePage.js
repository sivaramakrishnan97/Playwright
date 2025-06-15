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
exports.Homepage = void 0;
const BaseClass_1 = require("./BaseClass");
class Homepage extends BaseClass_1.BasePage {
    constructor(page) {
        super();
        this.page = page;
        this.appLauncherSelector = "App Launcher";
        this.searchBoxSelector = "Search apps and items...";
        this.leadSelector = "#Lead";
    }
    SearchLeadInApplauncher() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTitle("App Launcher").click();
            yield this.page.getByPlaceholder(this.searchBoxSelector).fill("leads");
            yield this.page.getByPlaceholder(this.searchBoxSelector).press('Enter');
            yield this.page.click(this.leadSelector);
            yield this.page.waitForTimeout(2000);
        });
    }
}
exports.Homepage = Homepage;
