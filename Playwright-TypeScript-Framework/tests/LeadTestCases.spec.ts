import { expect, Page } from "@playwright/test";
import { test } from "../fixtures/baseFixtures.ts"
import { LoginPage } from "../pages/LoginPage.ts";
//import { commonData } from "../testData/commonData.ts";
import { HomePage } from "../pages/HomePage.ts";
import { LeadPage } from "../pages/LeadsModule/LeadsPage.ts";
import { CreateLeadPage } from "../pages/LeadsModule/CreateLeadPage.ts";
import { LeadDetailsPage } from "../pages/LeadsModule/LeadDetailsPage.ts";
//import { leadsData } from "../testData/LeadsData.ts";
import leadsData from "../testData/JsonData/leadsData1.json" with {type: 'json'};
import commonData from "../testData/JsonData/commonData.json" with {type: 'json'};
import { CommonPage } from "../pages/CommonPage.ts";

export async function createLead(page: Page, loginPage: LoginPage, homePage: HomePage, commonPage: CommonPage) {
    await loginPage.openLoginPage("http://localhost:8888/");
    await loginPage.enterUsername(commonData.login.username);
    await loginPage.enterPassword(commonData.login.password);
    await loginPage.clickOnLoginButton();
    await homePage.clickOnLeadsModule();
    let leadsPage: LeadPage = new LeadPage(page);
    await leadsPage.clickOnCreateLeadButton();
    let createLeadPage: CreateLeadPage = new CreateLeadPage(page);
    await createLeadPage.selectTitle(commonData.leadsData.title);
    await createLeadPage.enterFirstName(commonData.leadsData.firstName);
    await createLeadPage.enterLastName(commonData.leadsData.lastName);
    await createLeadPage.enterCompany(commonData.leadsData.company);
    await createLeadPage.enterLeadTitle(commonData.leadsData.leadTitle);
    await createLeadPage.selectLeadSource(commonData.leadsData.leadSource);
    await createLeadPage.selectIndustry(commonData.leadsData.industry);
    await createLeadPage.enterNoOfEmployee(commonData.leadsData.noOfEmployee);
    await createLeadPage.enterSecondoryEmail(commonData.leadsData.secondryEmail);
    await createLeadPage.enterPhoneNo(commonData.leadsData.phone);
    await createLeadPage.enterMobileNo(commonData.leadsData.mobile);
    await createLeadPage.enterFax(commonData.leadsData.fax);
    await createLeadPage.enterEmail(commonData.leadsData.email);
    await createLeadPage.enterWebsite(commonData.leadsData.website);
    await createLeadPage.selectLeadSatus(commonData.leadsData.leadStatus);
    await createLeadPage.selectRating(commonData.leadsData.rating);
    await createLeadPage.enterStreet(commonData.leadsData.street);
    await createLeadPage.enterPostalCode(commonData.leadsData.postalCode);
    await createLeadPage.enterCountry(commonData.leadsData.country);
    await createLeadPage.enterPoBoxNo(commonData.leadsData.poBoxNo);
    await createLeadPage.enterCity(commonData.leadsData.city);
    await createLeadPage.enterState(commonData.leadsData.state);
    await createLeadPage.enterDescription(commonData.leadsData.description);
    await commonPage.clickOnSaveButton();
}


test('VT001_Verify_Create_Lead', async ({ page, loginPage, homePage, leadDetailsPage, commonPage }) => {
    await createLead(page, loginPage, homePage, commonPage);
    expect(page).toHaveTitle("Administrator - Leads - vtiger CRM 5 - Commercial Open Source CRM");
    expect(leadDetailsPage.createdLeadHeading).toContainText(commonData.leadsData.lastName);
    await page.pause();
});



test('VT002_Verify_Create_Lead_&_Edit_Lead', async ({ page, loginPage, homePage, createLeadPage, leadDetailsPage, commonPage }) => {
    await createLead(page, loginPage, homePage, commonPage);
    await expect(commonPage.editButton).toBeVisible();
    await expect(commonPage.editButton).toBeEnabled();
    await commonPage.clickOnEditButton();
    await createLeadPage.selectTitle(leadsData.TC002.title);
    await createLeadPage.enterFirstName(leadsData.TC002.firstName);
    await createLeadPage.enterLastName(leadsData.TC002.lastName);
    await createLeadPage.enterCompany(leadsData.TC002.company);
    await createLeadPage.enterLeadTitle(leadsData.TC002.leadTitle);
    await createLeadPage.selectLeadSource(leadsData.TC002.leadSource);
    await createLeadPage.selectIndustry(leadsData.TC002.industry);
    await createLeadPage.enterNoOfEmployee(leadsData.TC002.noOfEmployee);
    await createLeadPage.enterSecondoryEmail(leadsData.TC002.secondryEmail);
    await createLeadPage.enterPhoneNo(leadsData.TC002.phone);
    await createLeadPage.enterMobileNo(leadsData.TC002.mobile);
    await createLeadPage.enterFax(leadsData.TC002.fax);
    await createLeadPage.enterEmail(leadsData.TC002.email);
    await createLeadPage.enterWebsite(leadsData.TC002.website);
    await createLeadPage.selectLeadSatus(leadsData.TC002.leadStatus);
    await createLeadPage.selectRating(leadsData.TC002.rating);
    await createLeadPage.enterStreet(leadsData.TC002.street);
    await createLeadPage.enterPostalCode(leadsData.TC002.postalCode);
    await createLeadPage.enterCountry(leadsData.TC002.country);
    await createLeadPage.enterPoBoxNo(leadsData.TC002.poBoxNo);
    await createLeadPage.enterCity(leadsData.TC002.city);
    await createLeadPage.enterState(leadsData.TC002.state);
    await createLeadPage.enterDescription(leadsData.TC002.description);
    await expect(createLeadPage.title).toHaveValue(leadsData.TC002.title);
    await expect(createLeadPage.firstName).toHaveValue(leadsData.TC002.firstName);
    await expect(createLeadPage.lastName).toHaveValue(leadsData.TC002.lastName);
    await expect(createLeadPage.company).toHaveValue(leadsData.TC002.company);
    await expect(createLeadPage.description).toHaveValue(leadsData.TC002.description);
    await expect(commonPage.saveButton).toBeVisible();
    await commonPage.clickOnSaveButton();
    await expect(leadDetailsPage.lastnameText).toHaveText(leadsData.TC002.lastName);
    expect(leadDetailsPage.companyText).toHaveText(leadsData.TC002.company);
    expect(leadDetailsPage.leadSourceText).toHaveText(leadsData.TC002.leadSource);
    expect(leadDetailsPage.descriptionText).toHaveText(leadsData.TC002.description);
    await page.pause();
});


test('VT003_Verify_Create_Lead_&_Delete_Lead', async ({ page, loginPage, homePage, leadDetailsPage, commonPage }) => {
    await createLead(page, loginPage, homePage, commonPage);
    await expect(leadDetailsPage.deleteButton).toBeVisible();
    await leadDetailsPage.acceptAlert();
    await leadDetailsPage.clickOnDeleteButton();
    await expect(leadDetailsPage.LEADS).toBeVisible();
    await leadDetailsPage.clickOnLEADS()
    let leadPage: LeadPage = new LeadPage(page);
    await commonPage.enterLeadNoInSearchArea(leadsData.TC003.leadNo);
    await commonPage.clickOnSearchNowButton();
    await page.pause();
});
