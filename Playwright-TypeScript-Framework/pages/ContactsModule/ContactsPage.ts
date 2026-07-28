import { test, expect, Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";

export class ContactsPage extends BasePage {

    private createContactButton: Locator;
    private searchArea: Locator;
    private searchFormat: Locator;


    constructor(page: Page) {
        super(page);
        this.createContactButton = page.locator("//img[@title='Create Contact...']");
        this.searchArea = page.locator("//input[@class='txtBox']");
        this.searchFormat = page.locator("//select[@name='search_field']").first();

    }

    async clickOnCreateContactButton() {
        await this.click(this.createContactButton);
    }



    async selectSearchFormat(formatValue: string) {
        await this.selectOptionByValue(this.searchFormat, formatValue);
    }







}
