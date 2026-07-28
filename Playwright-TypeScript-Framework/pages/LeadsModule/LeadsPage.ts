import test, { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";
import { createLead } from "../../tests/LeadTestCases.spec.ts";
import { HomePage } from "../HomePage.ts";

export class LeadPage extends BasePage {
    private createLeadButton: Locator;


    constructor(page: Page) {
        super(page);
        this.createLeadButton = page.locator("//img[@title='Create Lead...']");


    }

    async clickOnCreateLeadButton() {
        await this.click(this.createLeadButton);
    }



}




