import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { HomePage } from "../pages/HomePage.ts";
import { LeadPage } from "../pages/LeadsModule/LeadsPage.ts";
import { CreateLeadPage } from "../pages/LeadsModule/CreateLeadPage.ts";
import { CommonPage } from "../pages/CommonPage.ts";
import commonData from "../testData/JsonData/commonData.json" with { type: "json" };
import leadsData from "../testData/JsonData/LeadsData.json" with { type: "json" };

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage("http://localhost:8888/");
    await loginPage.enterUsername(commonData.login.username);
    await loginPage.enterPassword(commonData.login.password);
    await loginPage.clickOnLoginButton();
});

test.afterEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.hoverOnAdministratorImg1();
    await homePage.clickOnSignOutButton();
});

leadsData.forEach((data) => {

    test(`VT001_Verify_Create_Lead - ${data.label}`, async ({ page }) => {

        homePage = new HomePage(page);
        await homePage.clickOnLeadsModule();
        const leadsPage = new LeadPage(page);
        await leadsPage.clickOnCreateLeadButton();
        const createLeadPage = new CreateLeadPage(page);
        await createLeadPage.selectTitle(data.title);
        await createLeadPage.enterFirstName(data.firstName);
        await createLeadPage.enterLastName(data.lastName);
        await createLeadPage.enterCompany(data.company);
        await createLeadPage.enterLeadTitle(data.leadTitle);
        await createLeadPage.selectLeadSource(data.leadSource);
        await createLeadPage.selectIndustry(data.industry);
        await createLeadPage.enterNoOfEmployee(data.noOfEmployee);
        await createLeadPage.enterSecondoryEmail(data.secondryEmail);
        await createLeadPage.enterPhoneNo(data.phone);
        await createLeadPage.enterMobileNo(data.mobile);
        await createLeadPage.enterFax(data.fax);
        await createLeadPage.enterEmail(data.email);
        await createLeadPage.enterWebsite(data.website);
        await createLeadPage.selectLeadSatus(data.leadStatus);
        await createLeadPage.selectRating(data.rating);
        await createLeadPage.enterStreet(data.street);
        await createLeadPage.enterPostalCode(data.postalCode);
        await createLeadPage.enterCountry(data.country);
        await createLeadPage.enterPoBoxNo(data.poBoxNo);
        await createLeadPage.enterCity(data.city);
        await createLeadPage.enterState(data.state);
        await createLeadPage.enterDescription(data.description);
        const commonPage = new CommonPage(page);
        await commonPage.clickOnSaveButton();
    });

});