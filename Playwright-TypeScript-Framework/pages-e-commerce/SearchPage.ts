import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class SearchPage extends BasePage{

    constructor(page:Page){
        super(page);
    }

    product(productName:string){
        return this.page.locator(`text=${productName}`);

    }

    async selectProduct(productName:string){
        await this.click(this.product(productName));

    }

}