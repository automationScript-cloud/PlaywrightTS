import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import commonData from "../testData/JsonData/commonData.json" with {type: 'json'}
import { HomePage } from "../pages/HomePage.ts";
import { OrganizationPage } from "../pages/OrganizationsModule/OrganizationPage.ts";
import { CreateOrganizationPage } from "../pages/OrganizationsModule/CreateOrganizationPage.ts";
import { listenerCount } from "process";
import { CommonPage } from "../pages/CommonPage.ts";
import orgData from "../testData/JsonData/OrganizationData.json" with {type: 'json'}


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



test("TC001_Verify_Create_Organization", async ({ page }) => {
    homePage = new HomePage(page);
    await expect(page).toHaveTitle("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await expect(homePage.organizationsModule).toBeVisible();
    await homePage.clickOnOrganizationModule();
    let organizationPage: OrganizationPage = new OrganizationPage(page);
    await organizationPage.clickOnCreateOrgButton();
    let createOrganizationPage: CreateOrganizationPage = new CreateOrganizationPage(page);
    await createOrganizationPage.enterOrgName(commonData.organizationData.organizationName);
    await createOrganizationPage.enterWebsite(commonData.organizationData.website);
    await createOrganizationPage.enterTickerSymbol(commonData.organizationData.tickerSymbol);
    await createOrganizationPage.clickOnPlusButton();
    await page.waitForTimeout(8000);
    let orgPage: Page = await createOrganizationPage.switchOnOrganizationsWindowByIndex(1);
    createOrganizationPage = new CreateOrganizationPage(orgPage);
    await createOrganizationPage.selectOrgToMember();
    await page.waitForTimeout(8000);
    let mainPage: Page = await createOrganizationPage.switchOnMainWindowByIndex(0);
    createOrganizationPage = new CreateOrganizationPage(mainPage);
    await page.waitForTimeout(8000);
    await createOrganizationPage.enterEmployee(commonData.organizationData.employees);
    await createOrganizationPage.enterOtherEmail(commonData.organizationData.otherEmail);
    await createOrganizationPage.selectIndustry(commonData.organizationData.industry);
    await createOrganizationPage.selectAccountType(commonData.organizationData.type);
    await createOrganizationPage.enterPhoneNo(commonData.organizationData.phone);
    await createOrganizationPage.enterFaxNo(commonData.organizationData.fax);
    await createOrganizationPage.enterOtherPhone(commonData.organizationData.otherPhone);
    await createOrganizationPage.enterEmail(commonData.organizationData.email);
    await createOrganizationPage.enterOwnership(commonData.organizationData.ownership);
    await createOrganizationPage.selectRating(commonData.organizationData.rating);
    await createOrganizationPage.enterSICCode(commonData.organizationData.SICCode);
    await createOrganizationPage.enterBillingAddress(commonData.organizationData.billingAddress);
    await createOrganizationPage.enterBillingPOBoxNo(commonData.organizationData.billingPOBox);
    await createOrganizationPage.enterBillingCity(commonData.organizationData.billingCity);
    await createOrganizationPage.enterBillingState(commonData.organizationData.billingState);
    await createOrganizationPage.enterBillingCode(commonData.organizationData.billingPostalCode);
    await createOrganizationPage.enterBillingCountry(commonData.organizationData.billingCountry);
    await createOrganizationPage.enterShippingAddress(commonData.organizationData.shippingAddress);
    await createOrganizationPage.enterShippingPOBox(commonData.organizationData.shippingPOBox);
    await createOrganizationPage.enterShippingCity(commonData.organizationData.shippingCity);
    await createOrganizationPage.enterShippingState(commonData.organizationData.shippingState);
    await createOrganizationPage.enterShippingPoCode(commonData.organizationData.shippingPostalCode)
    await createOrganizationPage.enterShippingCountry(commonData.organizationData.shippingCountry);
    await createOrganizationPage.enterOrgDescription(commonData.organizationData.discription);
    let commonPage: CommonPage = new CommonPage(page);
    await commonPage.clickOnSaveButton();

});



test("organizationData_Verify_Create_And_Edit_Organization", async ({ page }) => {
    homePage = new HomePage(page);
    await expect(page).toHaveTitle("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await expect(homePage.organizationsModule).toBeVisible();
    await homePage.clickOnOrganizationModule();
    let organizationPage: OrganizationPage = new OrganizationPage(page);
    await organizationPage.clickOnCreateOrgButton();
    let createOrganizationPage: CreateOrganizationPage = new CreateOrganizationPage(page);
    await createOrganizationPage.enterOrgName(commonData.organizationData.organizationName);
    await createOrganizationPage.enterWebsite(commonData.organizationData.website);
    await createOrganizationPage.enterTickerSymbol(commonData.organizationData.tickerSymbol);
    await createOrganizationPage.clickOnPlusButton();
    await page.waitForTimeout(8000);
    let orgPage: Page = await createOrganizationPage.switchOnOrganizationsWindowByIndex(1);
    createOrganizationPage = new CreateOrganizationPage(orgPage);
    await createOrganizationPage.selectOrgToMember();
    await page.waitForTimeout(8000);
    let mainPage: Page = await createOrganizationPage.switchOnMainWindowByIndex(0);
    createOrganizationPage = new CreateOrganizationPage(mainPage);
    await page.waitForTimeout(8000);
    await createOrganizationPage.enterEmployee(commonData.organizationData.employees);
    await createOrganizationPage.enterOtherEmail(commonData.organizationData.otherEmail);
    await createOrganizationPage.selectIndustry(commonData.organizationData.industry);
    await createOrganizationPage.selectAccountType(commonData.organizationData.type);
    await createOrganizationPage.enterPhoneNo(commonData.organizationData.phone);
    await createOrganizationPage.enterFaxNo(commonData.organizationData.fax);
    await createOrganizationPage.enterOtherPhone(commonData.organizationData.otherPhone);
    await createOrganizationPage.enterEmail(commonData.organizationData.email);
    await createOrganizationPage.enterOwnership(commonData.organizationData.ownership);
    await createOrganizationPage.selectRating(commonData.organizationData.rating);
    await createOrganizationPage.enterSICCode(commonData.organizationData.SICCode);
    await createOrganizationPage.enterBillingAddress(commonData.organizationData.billingAddress);
    await createOrganizationPage.enterBillingPOBoxNo(commonData.organizationData.billingPOBox);
    await createOrganizationPage.enterBillingCity(commonData.organizationData.billingCity);
    await createOrganizationPage.enterBillingState(commonData.organizationData.billingState);
    await createOrganizationPage.enterBillingCode(commonData.organizationData.billingPostalCode);
    await createOrganizationPage.enterBillingCountry(commonData.organizationData.billingCountry);
    await createOrganizationPage.enterShippingAddress(commonData.organizationData.shippingAddress);
    await createOrganizationPage.enterShippingPOBox(commonData.organizationData.shippingPOBox);
    await createOrganizationPage.enterShippingCity(commonData.organizationData.shippingCity);
    await createOrganizationPage.enterShippingState(commonData.organizationData.shippingState);
    await createOrganizationPage.enterShippingPoCode(commonData.organizationData.shippingPostalCode)
    await createOrganizationPage.enterShippingCountry(commonData.organizationData.shippingCountry);
    await createOrganizationPage.enterOrgDescription(commonData.organizationData.discription);
    let commonPage: CommonPage = new CommonPage(page);
    await commonPage.clickOnSaveButton();
    await commonPage.clickOnEditButton();
    await createOrganizationPage.enterOrgName(orgData.TC002.organizationName);
    await createOrganizationPage.enterWebsite(orgData.TC002.website);
    await createOrganizationPage.enterTickerSymbol(orgData.TC002.tickerSymbol);
    await createOrganizationPage.clickOnPlusButton();
    await page.waitForTimeout(8000);
    orgPage = await createOrganizationPage.switchOnOrganizationsWindowByIndex(1);
    createOrganizationPage = new CreateOrganizationPage(orgPage);
    await createOrganizationPage.selectOrgToMember();
    await page.waitForTimeout(8000);
    mainPage = await createOrganizationPage.switchOnMainWindowByIndex(0);
    createOrganizationPage = new CreateOrganizationPage(mainPage);
    await page.waitForTimeout(8000);
    await createOrganizationPage.enterEmployee(orgData.TC002.employees);
    await createOrganizationPage.enterOtherEmail(orgData.TC002.otherEmail);
    await createOrganizationPage.selectIndustry(orgData.TC002.industry);
    await createOrganizationPage.selectAccountType(orgData.TC002.type);
    await createOrganizationPage.enterPhoneNo(orgData.TC002.phone);
    await createOrganizationPage.enterFaxNo(orgData.TC002.fax);
    await createOrganizationPage.enterOtherPhone(orgData.TC002.otherPhone);
    await createOrganizationPage.enterEmail(orgData.TC002.email);
    await createOrganizationPage.enterOwnership(orgData.TC002.ownership);
    await createOrganizationPage.selectRating(orgData.TC002.rating);
    await createOrganizationPage.enterSICCode(orgData.TC002.SICCode);
    await createOrganizationPage.enterBillingAddress(orgData.TC002.billingAddress);
    await createOrganizationPage.enterBillingPOBoxNo(orgData.TC002.billingPOBox);
    await createOrganizationPage.enterBillingCity(orgData.TC002.billingCity);
    await createOrganizationPage.enterBillingState(orgData.TC002.billingState);
    await createOrganizationPage.enterBillingCode(orgData.TC002.billingPostalCode);
    await createOrganizationPage.enterBillingCountry(orgData.TC002.billingCountry);
    await createOrganizationPage.enterShippingAddress(orgData.TC002.shippingAddress);
    await createOrganizationPage.enterShippingPOBox(orgData.TC002.shippingPOBox);
    await createOrganizationPage.enterShippingCity(orgData.TC002.shippingCity);
    await createOrganizationPage.enterShippingState(orgData.TC002.shippingState);
    await createOrganizationPage.enterShippingPoCode(orgData.TC002.shippingPostalCode)
    await createOrganizationPage.enterShippingCountry(orgData.TC002.shippingCountry);
    await createOrganizationPage.enterOrgDescription(orgData.TC002.discription);
    await commonPage.clickOnSaveButton();
});



test('Verify_Create_Organization_And_Delete', async ({ page }) => {
    homePage = new HomePage(page);
    await expect(page).toHaveTitle("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
    await expect(homePage.organizationsModule).toBeVisible();
    await homePage.clickOnOrganizationModule();
    let organizationPage: OrganizationPage = new OrganizationPage(page);
    await organizationPage.clickOnCreateOrgButton();
    let createOrganizationPage: CreateOrganizationPage = new CreateOrganizationPage(page);
    await createOrganizationPage.enterOrgName(commonData.organizationData.organizationName);
    await createOrganizationPage.enterWebsite(commonData.organizationData.website);
    await createOrganizationPage.enterTickerSymbol(commonData.organizationData.tickerSymbol);
    await createOrganizationPage.clickOnPlusButton();
    await page.waitForTimeout(8000);
    let orgPage: Page = await createOrganizationPage.switchOnOrganizationsWindowByIndex(1);
    createOrganizationPage = new CreateOrganizationPage(orgPage);
    await createOrganizationPage.selectOrgToMember();
    await page.waitForTimeout(8000);
    let mainPage: Page = await createOrganizationPage.switchOnMainWindowByIndex(0);
    createOrganizationPage = new CreateOrganizationPage(mainPage);
    await page.waitForTimeout(8000);
    await createOrganizationPage.enterEmployee(commonData.organizationData.employees);
    await createOrganizationPage.enterOtherEmail(commonData.organizationData.otherEmail);
    await createOrganizationPage.selectIndustry(commonData.organizationData.industry);
    await createOrganizationPage.selectAccountType(commonData.organizationData.type);
    await createOrganizationPage.enterPhoneNo(commonData.organizationData.phone);
    await createOrganizationPage.enterFaxNo(commonData.organizationData.fax);
    await createOrganizationPage.enterOtherPhone(commonData.organizationData.otherPhone);
    await createOrganizationPage.enterEmail(commonData.organizationData.email);
    await createOrganizationPage.enterOwnership(commonData.organizationData.ownership);
    await createOrganizationPage.selectRating(commonData.organizationData.rating);
    await createOrganizationPage.enterSICCode(commonData.organizationData.SICCode);
    await createOrganizationPage.enterBillingAddress(commonData.organizationData.billingAddress);
    await createOrganizationPage.enterBillingPOBoxNo(commonData.organizationData.billingPOBox);
    await createOrganizationPage.enterBillingCity(commonData.organizationData.billingCity);
    await createOrganizationPage.enterBillingState(commonData.organizationData.billingState);
    await createOrganizationPage.enterBillingCode(commonData.organizationData.billingPostalCode);
    await createOrganizationPage.enterBillingCountry(commonData.organizationData.billingCountry);
    await createOrganizationPage.enterShippingAddress(commonData.organizationData.shippingAddress);
    await createOrganizationPage.enterShippingPOBox(commonData.organizationData.shippingPOBox);
    await createOrganizationPage.enterShippingCity(commonData.organizationData.shippingCity);
    await createOrganizationPage.enterShippingState(commonData.organizationData.shippingState);
    await createOrganizationPage.enterShippingPoCode(commonData.organizationData.shippingPostalCode)
    await createOrganizationPage.enterShippingCountry(commonData.organizationData.shippingCountry);
    await createOrganizationPage.enterOrgDescription(commonData.organizationData.discription);
    let commonPage: CommonPage = new CommonPage(page);
    await commonPage.clickOnSaveButton();
    await commonPage.acceptAlert();
    await commonPage.clickOnDeleteButton();


});