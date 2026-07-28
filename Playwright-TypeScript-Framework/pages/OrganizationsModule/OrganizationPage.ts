import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";


export class OrganizationPage extends BasePage {


    private createOrgButton: Locator;

    constructor(page: Page) {
        super(page);
        this.createOrgButton = page.locator("//img[@title='Create Organization...']");
    }

    async clickOnCreateOrgButton() {
        await this.click(this.createOrgButton);
    }
}