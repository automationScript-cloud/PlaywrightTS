import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage.ts";

export class CommonPage extends BasePage {


    readonly saveButton: Locator;
    readonly editButton: Locator;
    private searchArea: Locator;
    private searchNowBtn: Locator;
    private deleteButton: Locator;
    constructor(page: Page) {
        super(page);
        this.saveButton = page.locator("//input[@title='Save [Alt+S]']").first();
        this.editButton = page.locator("//input[@title='Edit [Alt+E]']").first();
        this.searchArea = page.locator("//input[@class='txtBox']");
        this.searchNowBtn = page.locator("//input[@name='submit']");
        this.deleteButton = page.locator("//input[@title='Delete [Alt+D]']").first();
    }

    async clickOnSaveButton() {
        await this.click(this.saveButton);

    }

    async clickOnEditButton() {
        await this.click(this.editButton);
    }

    async enterContactOrgNameInSearchArea(contactOrgName: string) {
        await this.enterText(this.searchArea, contactOrgName);
    }

    async enterLeadNoInSearchArea(leadNo: string) {
        await this.enterText(this.searchArea, leadNo);
    }

    async clickOnSearchNowButton() {
        await this.click(this.searchNowBtn);
    }

    async clickOnDeleteButton() {
        await this.click(this.deleteButton);
    }
}