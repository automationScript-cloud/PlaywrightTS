import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";


export class ProductPage extends BasePage {

    private createProductButton: Locator;

    constructor(page: Page) {
        super(page);
        this.createProductButton = page.locator("//img[@title='Create Product...']");

    }

    async clickOnCreateProductButton() {
        await this.click(this.createProductButton);
    }
}