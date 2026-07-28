import { Page } from '@playwright/test';
import { BasePage } from '../utils/BasePage.ts';

export class CheckoutPage extends BasePage{

    readonly placeOrder;

    constructor(page:Page){
        super(page);
        this.placeOrder=page.locator("//button[text()='Place Order']");

    }

    async order(){
        await this.click(this.placeOrder);
    }

}