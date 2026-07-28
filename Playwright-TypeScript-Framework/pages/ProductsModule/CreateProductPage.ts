import { Page, Locator } from "@playwright/test";
import { BasePage } from "../../utils/BasePage.ts";


export class CreateProductPage extends BasePage {
    private productName: Locator;
    private partNumber: Locator;
    private calanderIcon1: Locator;
    private forwardIcon: Locator;
    private backwardIcon: Locator;
    private crossIcon: Locator;
    private productCategory: Locator;
    private calanderIcon2: Locator;
    private forwardIcon2: Locator;
    private crossIcon2: Locator;
    private productSheet: Locator;
    private GLAccount: Locator;
    private manufacturer: Locator;
    private website: Locator;
    private mfr_part_no: Locator;
    private serialNo: Locator;
    private chooseFile:Locator;




    constructor(page: Page) {
        super(page);
        this.productName = page.locator("//input[@name='productname']");
        this.partNumber = page.locator("//input[@name='productcode']");
        this.calanderIcon1 = page.locator("//img[@id='jscal_trigger_sales_start_date']");
        this.forwardIcon = page.locator("//td[text()='»']");
        this.backwardIcon = page.locator("//td[text()='«']");
        this.crossIcon = page.locator("//td[text()='×']").last();
        this.productCategory = page.locator("//select[@name='productcategory']");
        this.calanderIcon2 = page.locator("//img[@id='jscal_trigger_sales_end_date']");
        this.forwardIcon2 = page.locator("//td[text()='»']").last();
        this.crossIcon2 = page.locator("//td[@class='title']/following-sibling::td[text()='×']").last();
        this.productSheet = page.locator("//input[@name='productsheet']");
        this.GLAccount = page.locator("//select[@name='glacct']");
        this.manufacturer = page.locator("//select[@name='manufacturer']");
        this.website = page.locator("//input[@name='mfr_part_no']/ancestor::tr//td[text()='Website 			']//following-sibling::td//input");
        this.mfr_part_no = page.locator("//input[@name='mfr_part_no']");
        this.serialNo = page.locator("//input[@name='serial_no']");
        this.chooseFile=page.locator("//input[@type='file']");
    }

    async enterProductName(productNameValue: string) {
        await this.enterText(this.productName, productNameValue);
    }

    async enterPartNumber(partNumberValue: string) {
        await this.enterText(this.partNumber, partNumberValue);
    }

    async clickOnCalanderIconToStartDate() {
        await this.click(this.calanderIcon1);
    }

    async clickOnForwardIcon() {
        await this.click(this.forwardIcon);
    }
    async clickOnBackwardIconToSelectStartData() {
        await this.click(this.backwardIcon);
    }

    async closeCalander() {
        await this.click(this.crossIcon);
    }

    async selectProductCategory(categoryValue: string) {
        await this.selectOptionByValue(this.productCategory, categoryValue);
    }

    async clickOnCalanderIconToEndDate() {
        await this.click(this.calanderIcon2);
    }

    async clickOnForwardIconToSelectEndData() {
        await this.click(this.forwardIcon2);
    }

    async clickOnCrossIcon2() {
        await this.click(this.crossIcon2);
    }

    async enterProductSheet(sheetValue: string) {
        await this.enterText(this.productSheet, sheetValue);
    }


    async selectGLAccount(GLAccountValue: string) {
        await this.selectOptionByValue(this.GLAccount, GLAccountValue);
    }

    async selectManufacturer(manufacturerValue: string) {
        await this.selectOptionByValue(this.manufacturer, manufacturerValue);
    }

    async enterWebsite(webSiteValue: string) {
        await this.enterText(this.website, webSiteValue);
    }

    async enterMfr_Part_No(mfr_part_noValue: string) {
        await this.enterText(this.mfr_part_no, mfr_part_noValue);
    }

    async enterSerialNo(serialNumber: string) {
        await this.enterText(this.serialNo, serialNumber);
    }

    async uploadFileToProductInfo(filePath:string){
      await this.clickAndUploadFile(this.chooseFile,filePath);
    }

    
}