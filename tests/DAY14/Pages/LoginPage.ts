
import {BasePage} from "./BaseClass"

export class LoginPage extends BasePage {

private usernameSelector:string;
private passwordSelector:string;
private loginButtonSelector:string;

constructor(){
    super();//
    this.usernameSelector="#username";
    this.passwordSelector="#password";
    this.loginButtonSelector="#Login";
}

public async login(username:string, password:string):Promise<void>{
await this.page.fill(this.usernameSelector,username)
await this.page.fill(this.passwordSelector,password)
await this.page.click(this.loginButtonSelector)


}
}