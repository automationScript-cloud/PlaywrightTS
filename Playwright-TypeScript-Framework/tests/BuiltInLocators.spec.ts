import { test } from "@playwright/test";


test('Built-in locators', async ({ page }) => {
    /*
    getByRole()
    getByText()
    getByLabel()
    getByPlaceholder()
    getByTextId()
    getByTitle()
    getByAltText()
    */

    await page.goto("http://localhost:8888/");
    await page.locator("//input[@name='user_name']").fill("admin");
    await page.locator("//input[@name='user_password']").fill("admin");
    let barCode = page.getByAltText("vtiger Android Application").first();
    await barCode.screenshot({ path: "C:\\Users\\dell\\Desktop\\BarCode.png" });
    await page.locator("//input[@id='submitButton']").click();






});