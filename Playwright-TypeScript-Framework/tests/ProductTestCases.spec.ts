import { test } from "../fixtures/baseFixtures.ts"
import { expect } from "@playwright/test";
import commonData from "../testData/JsonData/commonData.json" with {type: 'json'}
import productData from "../testData/JsonData/ProductData.json" with {type: 'json'}

test.beforeEach('login', async ({ loginPage }) => {
    await loginPage.openLoginPage("http://localhost:8888/");
    await loginPage.enterUsername(commonData.login.username);
    await loginPage.enterPassword(commonData.login.password);
    await loginPage.clickOnLoginButton();
});

test.afterEach('logOut', async ({ homePage }) => {
    await homePage.hoverOnAdministratorImg1();
    await homePage.clickOnSignOutButton();
})


test('Verify_Create_Product', async ({ page, homePage, productPage, createProductPage, commonPage }) => {
    await homePage.clickOnProductsModule();
    await productPage.clickOnCreateProductButton();
    await createProductPage.enterProductName(commonData.productData.productName);
    await createProductPage.enterPartNumber(commonData.productData.partNumber);
    await createProductPage.clickOnCalanderIconToStartDate();
    await createProductPage.clickOnBackwardIconToSelectStartData();
    await createProductPage.closeCalander();
    await createProductPage.selectProductCategory(commonData.productData.productCategory);
    await createProductPage.clickOnCalanderIconToEndDate();
    await createProductPage.clickOnForwardIconToSelectEndData();
    await createProductPage.clickOnCrossIcon2();
    await createProductPage.enterProductSheet(commonData.productData.productSheet);
    await createProductPage.selectGLAccount(commonData.productData.GLAccount);
    await createProductPage.selectManufacturer(commonData.productData.manufacturerValue);
    await createProductPage.enterWebsite(commonData.productData.website);
    await createProductPage.enterMfr_Part_No(commonData.productData.mfr_part_no);
    await createProductPage.enterSerialNo(commonData.productData.serialNo);
    await createProductPage.uploadFileToProductInfo(commonData.productData.filePath);
    await commonPage.clickOnSaveButton();
});

test('Verify_Create_And_Edit_Product', async ({ page, homePage, productPage, createProductPage, commonPage }) => {
    await expect(homePage.productsModule).toBeVisible();
    await homePage.clickOnProductsModule();
    await productPage.clickOnCreateProductButton();
    await expect(createProductPage.productName).toBeEditable();
    await createProductPage.enterProductName(commonData.productData.productName);
    await expect(createProductPage.partNumber).toBeEditable();
    await createProductPage.enterPartNumber(commonData.productData.partNumber);
    await expect(createProductPage.calanderIcon1).toBeVisible();
    await createProductPage.clickOnCalanderIconToStartDate();
    await createProductPage.clickOnBackwardIconToSelectStartData();
    expect(createProductPage.crossIcon).toBeVisible();
    await createProductPage.closeCalander();
    await createProductPage.selectProductCategory(commonData.productData.productCategory);
    await createProductPage.clickOnCalanderIconToEndDate();
    await createProductPage.clickOnForwardIconToSelectEndData();
    await expect(createProductPage.crossIcon2).toBeEnabled();
    await createProductPage.clickOnCrossIcon2();
    await createProductPage.enterProductSheet(commonData.productData.productSheet);
    await createProductPage.selectGLAccount(commonData.productData.GLAccount);
    await createProductPage.selectManufacturer(commonData.productData.manufacturerValue);
    await createProductPage.enterWebsite(commonData.productData.website);
    await createProductPage.enterMfr_Part_No(commonData.productData.mfr_part_no);
    await createProductPage.enterSerialNo(commonData.productData.serialNo);
     await expect(createProductPage.chooseFile).toBeVisible();
    await createProductPage.uploadFileToProductInfo(commonData.productData.filePath);
    await expect(commonPage.saveButton).toBeVisible();
    await commonPage.clickOnSaveButton();
    await expect(commonPage.editButton).toBeVisible();
    await commonPage.clickOnEditButton();
   
    await createProductPage.enterProductName(productData.TC002.productName);
     await expect(createProductPage.productName).toHaveValue(productData.TC002.productName);
    await createProductPage.enterPartNumber(productData.TC002.partNumber);
    await expect(createProductPage.partNumber).toHaveValue(productData.TC002.partNumber);
    await createProductPage.clickOnCalanderIconToStartDate();
    await createProductPage.clickOnBackwardIconToSelectStartData();
    await createProductPage.closeCalander();
    await createProductPage.selectProductCategory(productData.TC002.productCategory);
    await createProductPage.clickOnCalanderIconToEndDate();
    await createProductPage.clickOnForwardIconToSelectEndData();
    await createProductPage.clickOnCrossIcon2();
    await createProductPage.enterProductSheet(productData.TC002.productSheet);
    await createProductPage.selectGLAccount(productData.TC002.GLAccount);
    await createProductPage.selectManufacturer(productData.TC002.manufacturerValue);
    await expect(createProductPage.manufacturer).toHaveValue(productData.TC002.manufacturerValue);
    await createProductPage.enterWebsite(productData.TC002.website);
    await expect(createProductPage.website).toHaveValue(productData.TC002.website);
    await createProductPage.enterMfr_Part_No(productData.TC002.mfr_part_no);
    await expect(createProductPage.mfr_part_no).toHaveValue(productData.TC002.mfr_part_no);
    await createProductPage.enterSerialNo(productData.TC002.serialNo);
    await expect(createProductPage.serialNo).toHaveValue(productData.TC002.serialNo);
    await expect(createProductPage.chooseFile).toBeVisible();
    await createProductPage.uploadFileToProductInfo(productData.TC002.filePath);
    await expect(commonPage.saveButton).toBeVisible();
    await commonPage.clickOnSaveButton();






});


test('Verify_Create_And_Delete_Product', async ({ page, homePage, productPage, createProductPage, commonPage }) => {
    await expect(homePage.productsModule).toBeVisible();
    await homePage.clickOnProductsModule();
    await productPage.clickOnCreateProductButton();
    await expect(createProductPage.productName).toBeEditable();
    await createProductPage.enterProductName(commonData.productData.productName);
    await expect(createProductPage.partNumber).toBeEditable();
    await createProductPage.enterPartNumber(commonData.productData.partNumber);
    await expect(createProductPage.calanderIcon1).toBeVisible();
    await createProductPage.clickOnCalanderIconToStartDate();
    await createProductPage.clickOnBackwardIconToSelectStartData();
    expect(createProductPage.crossIcon).toBeVisible();
    await createProductPage.closeCalander();
    await createProductPage.selectProductCategory(commonData.productData.productCategory);
    await createProductPage.clickOnCalanderIconToEndDate();
    await createProductPage.clickOnForwardIconToSelectEndData();
    await expect(createProductPage.crossIcon2).toBeEnabled();
    await createProductPage.clickOnCrossIcon2();
    await createProductPage.enterProductSheet(commonData.productData.productSheet);
    await createProductPage.selectGLAccount(commonData.productData.GLAccount);
    await createProductPage.selectManufacturer(commonData.productData.manufacturerValue);
    await createProductPage.enterWebsite(commonData.productData.website);
    await createProductPage.enterMfr_Part_No(commonData.productData.mfr_part_no);
    await createProductPage.enterSerialNo(commonData.productData.serialNo);
     await expect(createProductPage.chooseFile).toBeVisible();
    await createProductPage.uploadFileToProductInfo(commonData.productData.filePath);
    await expect(commonPage.saveButton).toBeVisible();
    await commonPage.clickOnSaveButton();
    await expect(commonPage.editButton).toBeVisible();
    await commonPage.clickOnEditButton();
    await createProductPage.enterProductName(productData.TC002.productName);
    await expect(createProductPage.productName).toHaveValue(productData.TC002.productName);
    await createProductPage.enterPartNumber(productData.TC002.partNumber);
    await expect(createProductPage.partNumber).toHaveValue(productData.TC002.partNumber);
    await createProductPage.clickOnCalanderIconToStartDate();
    await createProductPage.clickOnBackwardIconToSelectStartData();
    await createProductPage.closeCalander();
    await createProductPage.selectProductCategory(productData.TC002.productCategory);
    await createProductPage.clickOnCalanderIconToEndDate();
    await createProductPage.clickOnForwardIconToSelectEndData();
    await createProductPage.clickOnCrossIcon2();
    await createProductPage.enterProductSheet(productData.TC002.productSheet);
    await createProductPage.selectGLAccount(productData.TC002.GLAccount);
    await createProductPage.selectManufacturer(productData.TC002.manufacturerValue);
    await expect(createProductPage.manufacturer).toHaveValue(productData.TC002.manufacturerValue);
    await createProductPage.enterWebsite(productData.TC002.website);
    await expect(createProductPage.website).toHaveValue(productData.TC002.website);
    await createProductPage.enterMfr_Part_No(productData.TC002.mfr_part_no);
    await expect(createProductPage.mfr_part_no).toHaveValue(productData.TC002.mfr_part_no);
    await createProductPage.enterSerialNo(productData.TC002.serialNo);
    await expect(createProductPage.serialNo).toHaveValue(productData.TC002.serialNo);
    await expect(createProductPage.chooseFile).toBeVisible();
    await createProductPage.uploadFileToProductInfo(productData.TC002.filePath);
    await expect(commonPage.saveButton).toBeVisible();
    await commonPage.clickOnSaveButton();
});