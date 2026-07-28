import { test } from "@playwright/test";

test('waiting for assertion', async ({ page }) => {
    // Auto wait
    // Explicit Wait
    // Assertion Wait
    await page.goto("https://www.amazon.in/");
    await page.waitForSelector(".a-button-text");// explicit wait 
    await page.locator(".a-button-text").click();
    await page.waitForURL("https://www.amazon.in/");
    await page.waitForSelector(".nav-imageHref");
    let dealsRevealed = page.locator(".nav-imageHref");
    await dealsRevealed.screenshot({ path: "C:\\Users\\dell\\Desktop\\DealsAmazon.png" });
    await page.locator("//span[text()='Prime']").hover();
    await page.waitForTimeout(5000);
    await page.waitForSelector("#nav-flyout-amazonprime");
    let shoppingPlans = page.locator("#nav-flyout-amazonprime").first();
    await shoppingPlans.screenshot({ path: "C:\\Users\\dell\\Desktop\\ShoppingPlan.png" });
});