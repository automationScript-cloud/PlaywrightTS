import { test, expect } from "@playwright/test";
import commonData from "../testData/JsonData/LoginData.json" with { type: 'json' };
import { LoginPage } from "../pages/LoginPage.ts";

//Data Driven Testing:When we execute
commonData.forEach((data) => {
    test(`Verify Login with data driven testing - ${data.label}`, async ({ page }) => {
        let loginPage: LoginPage = new LoginPage(page);
        await loginPage.openLoginPage("http://localhost:8888/");
        await loginPage.enterUsername(data.username);
        await loginPage.enterPassword(data.password);
        await loginPage.clickOnLoginButton();
        if (data.status == true) {
            await expect(page).toHaveURL("http://localhost:8888/index.php?action=index&module=Home");
            await expect(page).toHaveTitle(" Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
        } else {
            await expect(loginPage.loginButton).toBeVisible();
        }
    });
});

