import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class HomePage extends BasePage{

    readonly searchBox;
    readonly searchButton;

    constructor(page:Page){
        super(page);
        this.searchBox=page.locator("#search");
        this.searchButton=page.locator("//button[@type='submit']");
    }

    async searchProduct(product:string){

        await this.enterText(this.searchBox,product);
        await this.click(this.searchButton);

    }

}