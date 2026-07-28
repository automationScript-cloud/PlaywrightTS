import { test, Locator } from "@playwright/test";
/*
* Click
* Clear
* Fill
* Get Inner Text
* Check & Uncheck Checkbox
* Double Click
* Right Click
* Mouse Hover
* Drag and Drop
* Dropdown Handling (by Text, Index, and Value)
* Scroll by Amount
* Scroll to Element
* Wait Methods
* Alert Handling
* Window Handling
* Screenshot Capture
*/



test('Scinario on flipkart with all methods', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.locator("//span[text()='✕']").click();
    let searchBox = page.locator("//input[@class='nw1UBF v1zwn25']").first();
    let searchAreaPlaceholder: string | null = await searchBox.getAttribute("placeholder");
    console.log(searchAreaPlaceholder);
    await searchBox.fill("Laptop");
    await searchBox.clear();
    await searchBox.fill("Shirt");
    await page.locator("//button[@class='XFwMiH']").first().click();
    let heading: Locator = page.locator("//span[@class='hc3u9s']");
    await heading.scrollIntoViewIfNeeded();
    let headingText: string = await heading.innerText();
    console.log(headingText);
    let moreModule: Locator = page.locator("//div[text()='More']");
    await moreModule.scrollIntoViewIfNeeded();
    await moreModule.hover();
    let product: Locator = page.locator("//div[text()='D Finish']/following-sibling::a[@title='Men Regular Fit Solid Spread Collar Casual Shirt']");
    await product.click();
    await page.pause();
});   