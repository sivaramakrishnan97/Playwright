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
exports.LoginPage = void 0;
const BaseClass_1 = require("./BaseClass");
class LoginPage extends BaseClass_1.BasePage {
    constructor() {
        super(); //
        this.usernameSelector = "#username";
        this.passwordSelector = "#password";
        this.loginButtonSelector = "#Login";
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.usernameSelector, username);
            yield this.page.fill(this.passwordSelector, password);
            yield this.page.click(this.loginButtonSelector);
        });
    }
}
exports.LoginPage = LoginPage;
