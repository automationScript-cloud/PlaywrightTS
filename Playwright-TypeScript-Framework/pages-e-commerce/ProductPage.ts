import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class ProductPage extends BasePage{

    readonly addToCart;

    constructor(page:Page){
        super(page);
        this.addToCart=page.locator("//button[contains(.,'Add to Cart')]");

    }

    async addProduct(){
        await this.click(this.addToCart);
    }

}