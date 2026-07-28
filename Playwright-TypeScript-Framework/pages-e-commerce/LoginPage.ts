import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class LoginPage extends BasePage{

    readonly email;
    readonly password;
    readonly loginButton;
    constructor(page: Page){
        super(page);
        this.email = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator("//button[text()='Login']");
    }

    async login(username:string,password:string){
        await this.enterText(this.email,username);
        await this.enterText(this.password,password);
        await this.click(this.loginButton);
    }

}