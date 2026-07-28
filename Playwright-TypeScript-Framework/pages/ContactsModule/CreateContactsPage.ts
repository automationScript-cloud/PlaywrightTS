import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";


export class CreateContactsPage extends BasePage {
    private title: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private orgIcon1: Locator;
    private orgName: Locator;
    private leadsSource: Locator;
    private contactTitle: Locator;
    private department: Locator;
    private email: Locator;
    private assistant: Locator;
    private assistancePhone: Locator;
    private emailOptOut: Locator;
    private reference: Locator;
    private notifyOwner: Locator;
    private officePhone: Locator;
    private calender: Locator;
    private calenderBtn: Locator;
    private orgIcon2: Locator;
    private contactsTo: Locator;
    private description: Locator;
    private file: Locator;


    constructor(page: Page) {
        super(page);
        this.title = page.locator("//select[@name='salutationtype']");
        this.firstName = page.locator("//input[@name='firstname']");
        this.lastName = page.locator("//input[@name='lastname']");
        this.orgIcon1 = page.locator("//img[@title='Select']").first();
        this.orgName = page.locator("//a[@href='javascript:window.close();']");
        this.leadsSource = page.locator("//select[@name='leadsource']");
        this.contactTitle = page.locator("//input[@id='title']");
        this.department = page.locator("//input[@id='department']");
        this.email = page.locator("//input[@name='email']");
        this.assistant = page.locator("//input[@id='assistant']");
        this.assistancePhone = page.locator("//input[@id='assistantphone']");
        this.emailOptOut = page.locator("//input[@name='emailoptout']");
        this.reference = page.locator("//input[@name='reference']");
        this.notifyOwner = page.locator("//input[@name='notify_owner']");
        this.officePhone = page.locator("//input[@name='phone']");
        this.calender = page.locator("//img[@id='jscal_trigger_birthday']");
        this.calenderBtn = page.locator("//td[@class='hilite nav button hilite']");
        this.orgIcon2 = page.locator("//img[@title='Select']").nth(1);
        this.contactsTo = page.locator("//a[@href='javascript:window.close();']").first();
        this.description = page.locator("//textarea[@class='detailedViewTextBox']").last();
        this.file = page.locator("//input[@type='file']");

    }

    async selectTitle(titleValue: string) {
        await this.selectOptionByValue(this.title, titleValue);
    }

    async enterFirstName(firstNameValue: string) {
        await this.enterText(this.firstName, firstNameValue);
    }

    async enterLastName(lastNameValue: string) {
        await this.enterText(this.lastName, lastNameValue);
    }

    async clickOnOrgIcon1() {
        await this.click(this.orgIcon1);
    }

    async switchOnNewWindowToSelectOrgName(index: number) {
        return await this.switchOnNewWindowByIndex(index);
    }

    async selectOrgName() {
        await this.click(this.orgName.first());
    }

    async selectLeadSource(leadsSourceValue: string) {
        await this.selectOptionByValue(this.leadsSource, leadsSourceValue);
    }

    async enterContactTitle(contactTitleValue: string) {
        await this.enterText(this.contactTitle, contactTitleValue);
    }


    async enterDepartment(departmentValue: string) {
        await this.enterText(this.department, departmentValue);
    }

    async enterEmail(emailValue: string) {
        await this.enterText(this.email, emailValue);
    }

    async enterAssistance(assistantValue: string) {
        await this.enterText(this.assistant, assistantValue);
    }


    async enterAssistancePhoneNo(phoneNo: string) {
        await this.enterText(this.assistancePhone, phoneNo);
    }

    async checkEmailOptOut() {
        await this.check(this.emailOptOut);
    }

    async checkReference() {
        await this.check(this.reference);
    }

    async checkNotifyOwner() {
        await this.check(this.notifyOwner);
    }

    async enterOfficePhoneNo(officePhone: string) {
        await this.enterText(this.officePhone, officePhone);
    }

    async clickOnCalanderIcon() {
        await this.click(this.calender);
    }

    async clickOnCalanderBtn() {
        await this.click(this.calenderBtn);
    }


    async clickOnOrgIcon2() {
        await this.click(this.orgIcon2);
    }
    async switchOnContactWinToSelectContact(index: number) {
        return await this.switchOnNewWindowByIndex(index);
    }
    async selectContactTo() {
        await this.click(this.contactsTo);
    }

    async enterDescription(descriptionValue: string) {
        await this.enterText(this.description, descriptionValue);
    }

    async switchOnMainWindowByIndex(index: number) {
        return await this.switchOnNewWindowByIndex(index);
    }


    async clickOnChooseFileButton() {
        await this.click(this.file);
    }
    async upLoadFileToCreateContact(filePath: string) {
        await this.upLoadFile(this.file, filePath);
    }



}