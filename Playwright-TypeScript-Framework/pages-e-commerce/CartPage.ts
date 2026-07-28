import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class CartPage extends BasePage{

    readonly checkout;

    constructor(page:Page){
        super(page);
        this.checkout=page.locator("//button[text()='Checkout']");
    }

    async proceedCheckout(){
        await this.click(this.checkout);

    }

}