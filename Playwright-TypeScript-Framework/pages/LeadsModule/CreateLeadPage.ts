import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";

export class CreateLeadPage extends BasePage {

    readonly title: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly leadTitle: Locator;
    readonly leadSource: Locator;
    readonly industry: Locator;
    readonly annualRevenue: Locator;
    readonly noOfEmp: Locator;
    readonly secondryEmail: Locator;
    readonly phone: Locator;
    readonly mobile: Locator;
    readonly fax: Locator;
    private email: Locator;
    private website: Locator;
    private leadStatus: Locator;
    private rating: Locator;
    private street: Locator;
    private poBox: Locator;
    private postalCode: Locator;
    private country: Locator;
    private city: Locator;
    private state: Locator;
    readonly description: Locator;


    constructor(page: Page) {
        super(page);
        this.title = page.locator("//select[@name='salutationtype']");
        this.firstName = page.locator("//input[@name='firstname']");
        this.lastName = page.locator("//input[@name='lastname']");
        this.company = page.locator("//input[@name='company']");
        this.leadTitle = page.locator("//input[@name='designation']");
        this.leadSource = page.locator("//select[@name='leadsource']");
        this.industry = page.locator("//select[@name='industry']");
        this.annualRevenue = page.locator("//input[@name='annualrevenue']");
        this.noOfEmp = page.locator("//input[@name='noofemployees']");
        this.secondryEmail = page.locator("//input[@name='secondaryemail']");
        this.phone = page.locator("//input[@name='phone']");
        this.mobile = page.locator("//input[@name='mobile']");
        this.fax = page.locator("//input[@name='fax']");
        this.email = page.locator("//input[@name='email']");
        this.website = page.locator("//input[@name='website']");
        this.leadStatus = page.locator("//select[@name='leadstatus']");
        this.rating = page.locator("//select[@name='rating']");
        this.street = page.locator("//textarea[@name='lane']");
        this.poBox = page.locator("//input[@name='pobox']");
        this.postalCode = page.locator("//input[@name='code']");
        this.country = page.locator("//input[@name='country']");
        this.city = page.locator("//input[@name='city']");
        this.state = page.locator("//input[@name='state']");
        this.description = page.locator("//textarea[@name='description']");

    }

    async selectTitle(value: string) {
        await this.selectOptionByValue(this.title, value);
    }

    async enterFirstName(firstNameValue: string) {
        await this.enterText(this.firstName, firstNameValue);
    }

    async enterLastName(lastNameValue: string) {
        await this.enterText(this.lastName, lastNameValue);
    }


    async enterCompany(companyValue: string) {
        await this.enterText(this.company, companyValue);
    }

    async enterLeadTitle(leadTitleValue: string) {
        await this.enterText(this.leadTitle, leadTitleValue);
    }

    async selectLeadSource(leadSourceValue: string) {
        await this.selectOptionByValue(this.leadSource, leadSourceValue);
    }

    async selectIndustry(industryValue: string) {
        await this.selectOptionByValue(this.industry, industryValue);
    }

    async enterAnnualRevenue(annualRevenueValue: string) {
        await this.enterText(this.annualRevenue, annualRevenueValue);
    }

    async enterNoOfEmployee(noOfEmployees: string) {
        await this.enterText(this.noOfEmp, noOfEmployees);
    }

    async enterSecondoryEmail(secondryEmailValue: string) {
        await this.enterText(this.secondryEmail, secondryEmailValue);
    }

    async enterPhoneNo(phoneNo: string) {
        await this.enterText(this.phone, phoneNo)
    }

    async enterMobileNo(mobileNo: string) {
        await this.enterText(this.mobile, mobileNo);
    }

    async enterFax(faxValue: string) {
        await this.enterText(this.fax, faxValue);
    }

    async enterEmail(emailValue: string) {
        await this.enterText(this.email, emailValue);
    }

    async enterWebsite(websiteValue: string) {
        await this.enterText(this.website, websiteValue);
    }

    async selectLeadSatus(leadsStatusValue: string) {
        await this.selectOptionByValue(this.leadStatus, leadsStatusValue);
    }

    async selectRating(ratingValue: string) {
        await this.selectOptionByValue(this.rating, ratingValue);
    }

    async enterStreet(streetValue: string) {
        await this.enterText(this.street, streetValue);
    }

    async enterPostalCode(postalCodeValue: string) {
        await this.enterText(this.postalCode, postalCodeValue);
    }

    async enterCountry(countryValue: string) {
        await this.enterText(this.country, countryValue);
    }

    async enterState(stateValue: string) {
        await this.enterText(this.state, stateValue);
    }

    async enterPoBoxNo(poBoxNo: string) {
        await this.enterText(this.poBox, poBoxNo);
    }

    async enterCity(cityValue: string) {
        await this.enterText(this.city, cityValue);
    }

    async enterDescription(descriptionValue: string) {
        await this.clearText(this.description);
        await this.typeSequentially(this.description, descriptionValue);
    }




}

