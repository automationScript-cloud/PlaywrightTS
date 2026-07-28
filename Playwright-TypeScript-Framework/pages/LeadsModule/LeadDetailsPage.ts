import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";

export class LeadDetailsPage extends BasePage {

    readonly createdLeadHeading: Locator;
    readonly deleteButton: Locator;
    readonly LEADS: Locator;
    readonly lastnameText: Locator;
    readonly companyText: Locator;
    readonly leadSourceText: Locator;
    readonly descriptionText: Locator;
    constructor(page: Page) {
        super(page);
        this.createdLeadHeading = page.locator("//span[@class='dvHeaderText']");
        this.deleteButton = page.locator("//input[@title='Delete [Alt+D]']").first();
        this.LEADS = page.locator("//a[@href='index.php?module=Leads&action=index']");
        this.lastnameText = page.locator("//span[@id='dtlview_Last Name']");
        this.companyText = page.locator("//span[text()='Coforge Consulting']");
        this.leadSourceText = page.locator("//span[@id='dtlview_Lead Source']");
        this.descriptionText = page.locator("//span[@id='dtlview_Description']");

    }


    async clickOnDeleteButton() {
        await this.click(this.deleteButton);
    }

    async clickOnLEADS() {
        await this.click(this.LEADS);
    }

    




}