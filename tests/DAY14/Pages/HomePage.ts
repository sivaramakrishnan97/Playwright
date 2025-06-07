import { promises } from "dns";
import { BasePage } from "./BaseClass";
import { Page } from "@playwright/test";


export class Homepage extends BasePage{

    protected appLauncherSelector:string;
    protected searchBoxSelector:string;
    protected leadSelector:string;

    
    constructor(page:Page){
        super()
        this.page=page
        this.appLauncherSelector="App Launcher"
        this.searchBoxSelector ="Search apps and items..."
        this.leadSelector="#Lead"

    }


   public async SearchLeadInApplauncher():Promise<void>{

    await this.page.getByTitle("App Launcher").click()
    await this.page.getByPlaceholder(this.searchBoxSelector).fill("leads")
    await this.page.getByPlaceholder(this.searchBoxSelector).press('Enter')
    await this.page.click(this.leadSelector)
    await this.page.waitForTimeout(2000)



    }






}