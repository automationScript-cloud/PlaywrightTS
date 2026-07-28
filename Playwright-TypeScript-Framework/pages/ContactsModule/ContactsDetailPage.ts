import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";

export class ContactsDetailPage extends BasePage {
    private createdContactHeading: Locator;
    private firstNameText: Locator;
    private orgNameText: Locator;
    private descriptionText: Locator;

    constructor(page: Page) {
        super(page);
        this.createdContactHeading = page.locator("//span[@class='dvHeaderText']");
        this.firstNameText = page.locator("//span[@id='dtlview_First Name']");
        this.orgNameText = page.locator("//a[contains(@href,'index.php?module=Accounts&action=DetailView&record')]");
        this.descriptionText = page.locator("//span[@id='dtlview_Description']");
    }





}
