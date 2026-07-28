import { test, Page, expect } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.ts";
import commonData from "../testData/JsonData/commonData.json" with {type: 'json'};
import { HomePage } from "../pages/HomePage.ts";
import { ContactsPage } from "../pages/ContactsModule/ContactsPage.ts";
import { CreateContactsPage } from "../pages/ContactsModule/CreateContactsPage.ts";
import { ContactsDetailPage } from "../pages/ContactsModule/ContactsDetailPage.ts";
import contactData from "../testData/JsonData/ContactData.json" with {type: 'json'};
import { CommonPage } from "../pages/CommonPage.ts";


test('Upload Single File', async ({ page }) => {
    let loginPage: LoginPage = new LoginPage(page);
    await loginPage.openLoginPage("http://localhost:8888/");
    await loginPage.enterUsername(commonData.login.username);
    await loginPage.enterPassword(commonData.login.password);
    await loginPage.clickOnLoginButton();
    let homePage: HomePage = new HomePage(page);
    await homePage.clickOnContactsModule();
    let contactsPage: ContactsPage = new ContactsPage(page);
    await contactsPage.clickOnCreateContactButton();
    let createContactsPage: CreateContactsPage = new CreateContactsPage(page);
    await createContactsPage.selectTitle(commonData.contactsData.title);
    await createContactsPage.enterFirstName(commonData.contactsData.firstName);
    await createContactsPage.enterLastName(commonData.contactsData.lastName);
    await createContactsPage.clickOnOrgIcon1();
    await page.waitForTimeout(8000);
    let orgPage: Page = await createContactsPage.switchOnNewWindowToSelectOrgName(1);
    createContactsPage = new CreateContactsPage(orgPage);
    await createContactsPage.selectOrgName();
    await page.waitForTimeout(3000);
    let mainPage: Page = await createContactsPage.switchOnMainWindowByIndex(0);
    createContactsPage = new CreateContactsPage(mainPage);
    await createContactsPage.selectLeadSource(commonData.contactsData.leadSource);
    await createContactsPage.enterContactTitle(commonData.contactsData.contactsTitle);
    await createContactsPage.enterDepartment(commonData.contactsData.department);
    await createContactsPage.enterEmail(commonData.contactsData.email);
    await createContactsPage.enterAssistance(commonData.contactsData.assistant);
    await createContactsPage.enterAssistancePhoneNo(commonData.contactsData.assistantPhoneNo);
    await createContactsPage.checkEmailOptOut();
    await createContactsPage.checkNotifyOwner();
    await createContactsPage.checkReference();
    await createContactsPage.clickOnOrgIcon2();
    await page.waitForTimeout(8000);
    let contactPage: Page = await createContactsPage.switchOnContactWinToSelectContact(1);
    await page.waitForTimeout(8000);
    createContactsPage = new CreateContactsPage(contactPage);
    await createContactsPage.selectContactTo();
    await page.waitForTimeout(8000);
    mainPage = await createContactsPage.switchOnMainWindowByIndex(0);
    createContactsPage = new CreateContactsPage(mainPage);
    await page.waitForTimeout(3000);
    await createContactsPage.enterDescription(commonData.contactsData.description);
    await createContactsPage.clickOnChooseFileButton()
    await createContactsPage.upLoadFileToCreateContact(commonData.contactsData.filePath);
    await page.waitForTimeout(5000);
    let commonMethod: CommonPage = new CommonPage(page);
    await commonMethod.clickOnSaveButton();
    await page.pause();
});


