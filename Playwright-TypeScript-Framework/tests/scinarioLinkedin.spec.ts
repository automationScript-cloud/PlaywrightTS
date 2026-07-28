import { test, expect } from "@playwright/test";

test('verify sign in', async ({ page }) => {

    await page.goto("http://linkedin.com/");
    await page.locator("//a[contains(text(),'Sign in with email')]").click();
    await page.locator("//input[@id='«Refvl3ksopa55j6»']").fill("vbxhjxvuw");
    await page.locator("//input[@id='«R2nvl3ksopa55j6»']").fill("8765432erfvbs");
    await page.locator("//button[@type='button']").nth(7).click();
   
    // let actErr: string | null = await page.locator("//p[contains(@class,'e6590096 b19ace0e _44')]").first().textContent();
    // console.log(actErr);
     await page.pause();



});