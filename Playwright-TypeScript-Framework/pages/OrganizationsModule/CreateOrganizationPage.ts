import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";


export class CreateOrganizationPage extends BasePage {
    private orgName: Locator;
    private website: Locator;
    private tickerSymbol: Locator;
    private plusIcon: Locator;
    private memeberOfOrgName: Locator;
    private employee: Locator;
    private otherEmail: Locator;
    private industrySelect: Locator;
    private typeSelect: Locator;
    private phone: Locator;
    private fax: Locator;
    private otherPhone: Locator;
    private email: Locator;
    private rating: Locator;
    private ownership: Locator;
    private SICCode: Locator;
    private billingAddress: Locator;
    private billingPOBox: Locator;
    private billingCity: Locator;
    private billingState: Locator;
    private billingCode: Locator;
    private billingCountry: Locator;
    private shippingAddress: Locator;
    private shippingPOBox: Locator;
    private shippingCity: Locator;
    private shippingState: Locator;
    private shippingPoCode: Locator;
    private shippingCountry: Locator;
    private OrgDescription: Locator;

    constructor(page: Page) {
        super(page);
        this.orgName = page.locator("//input[@name='accountname']");
        this.website = page.locator("//input[@name='website']");
        this.tickerSymbol = page.locator("//input[@name='tickersymbol']");
        this.plusIcon = page.locator("//img[@title='Select']");
        this.memeberOfOrgName = page.locator("//a[@href='javascript:window.close();']").first();
        this.employee = page.locator("//input[@id='employees']");
        this.otherEmail = page.locator("//input[@id='email2']");
        this.industrySelect = page.locator("//select[@name='industry']");
        this.typeSelect = page.locator("//select[@name='accounttype']");
        this.phone = page.locator("//input[@name='phone']");
        this.fax = page.locator("//input[@id='fax']");
        this.otherPhone = page.locator("//input[@name='otherphone']");
        this.email = page.locator("//input[@name='email1']");
        this.rating = page.locator("//select[@name='rating']");
        this.ownership = page.locator("//input[@name='ownership']");
        this.SICCode = page.locator("//input[@name='siccode']");
        this.billingAddress = page.locator("//textarea[@name='bill_street']");
        this.billingPOBox = page.locator("//input[@name='bill_pobox']");
        this.billingCity = page.locator("//input[@name='bill_city']");
        this.billingState = page.locator("//input[@name='bill_state']");
        this.billingCode = page.locator("//input[@name='bill_code']");
        this.billingCountry = page.locator("//input[@name='bill_country']");
        this.shippingAddress = page.locator("//textarea[@name='ship_street']");
        this.shippingPOBox = page.locator("//input[@name='ship_pobox']");
        this.shippingCity = page.locator("//input[@name='ship_city']");
        this.shippingState = page.locator("//input[@name='ship_state']");
        this.shippingPoCode = page.locator("//input[@name='ship_state']");
        this.shippingCountry = page.locator("//input[@name='ship_country']");
        this.OrgDescription = page.locator("//textarea[@name='description']");
    }

    async enterOrgName(orgNameValue: string) {
        await this.enterText(this.orgName, orgNameValue);
    }

    async enterWebsite(websiteValue: string) {
        await this.enterText(this.website, websiteValue);
    }

    async enterTickerSymbol(tickerSymbol: string) {
        await this.enterText(this.tickerSymbol, tickerSymbol);
    }

    async clickOnPlusButton() {
        await this.click(this.plusIcon);
    }

    async enterEmail(email: string) {
        await this.enterText(this.email, email);

    }

    async switchOnOrganizationsWindowByIndex(index: number) {
        return await this.switchOnNewWindowByIndex(index);
    }

    async switchOnMainWindowByIndex(index: number) {
        return await this.switchOnNewWindowByIndex(index);
    }

    async selectOrgToMember() {
        await this.click(this.memeberOfOrgName);
    }

    async enterEmployee(empValue: string) {
        await this.enterText(this.employee, empValue);
    }

    async enterOtherEmail(otherEmailValue: string) {
        await this.enterText(this.otherEmail, otherEmailValue);
    }

    async selectIndustry(industryValue: string) {
        await this.selectOptionByValue(this.industrySelect, industryValue);
    }
    async selectAccountType(accountTypeValue: string) {
        await this.selectOptionByValue(this.typeSelect, accountTypeValue);
    }

    async enterPhoneNo(phoneNo: string) {
        await this.enterText(this.phone, phoneNo);
    }

    async enterFaxNo(faxNo: string) {
        await this.enterText(this.fax, faxNo)
    }

    async enterOtherPhone(otherPhoneNo: string) {
        await this.enterText(this.otherPhone, otherPhoneNo);
    }

    async enterOwnership(ownershipValue: string) {
        await this.enterText(this.ownership, ownershipValue);
    }

    async selectRating(ratingValue: string) {
        await this.selectOptionByValue(this.rating, ratingValue);
    }


    async enterSICCode(SICCodeNo: string) {
        await this.enterText(this.SICCode, SICCodeNo);
    }

    async enterBillingAddress(billingAddressValue: string) {
        await this.enterText(this.billingAddress, billingAddressValue);
    }

    async enterBillingPOBoxNo(POBoxNo: string) {
        await this.enterText(this.billingPOBox, POBoxNo);
    }

    async enterBillingCity(billCity: string) {
        await this.enterText(this.billingCity, billCity);
    }

    async enterBillingState(billState: string) {
        await this.enterText(this.billingState, billState);
    }

    async enterBillingCode(billCode: string) {
        await this.enterText(this.billingCode, billCode);
    }

    async enterBillingCountry(billCountry: string) {
        await this.enterText(this.billingCountry, billCountry);
    }

    async enterShippingAddress(shippingAddressValue: string) {
        await this.enterText(this.shippingAddress, shippingAddressValue);
    }

    async enterShippingPOBox(shippingPOBoxNo: string) {
        await this.enterText(this.shippingPOBox, shippingPOBoxNo);
    }

    async enterShippingCity(shippingCity: string) {
        await this.enterText(this.shippingCity, shippingCity);
    }

    async enterShippingState(shippingState: string) {
        await this.enterText(this.shippingState, shippingState);
    }

    async enterShippingPoCode(shippingPoCodeValue: string) {
        await this.enterText(this.shippingPoCode, shippingPoCodeValue);
    }

    async enterShippingCountry(shipCountry: string) {
        await this.enterText(this.shippingCountry, shipCountry);
    }

    async enterOrgDescription(description: string) {
        await this.enterText(this.OrgDescription, description);
    }





}