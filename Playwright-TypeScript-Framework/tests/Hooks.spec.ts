import { test } from "@playwright/test";


test.beforeAll(() => {
    console.log("launch browser");// It will run one time before testcase
});

test.beforeEach(() => {
    console.log("login the Vtiger");// it will run before each testcase
});

test.afterEach(() => {
    console.log("sign out");// tt will run after each testcase
});


test.afterAll(() => {
    console.log("close browser");// it will run one time after all testcase

})


test('test-case-create-lead', async ({ page }) => {

    console.log("Click On Create Lead Button");
    console.log("Enter firstName");
    console.log("Enter secondName");
    console.log("Enter companyName");
    console.log("Click on save button");

});




test.describe.only("regression",async () => {
    test('test-case-create-contacts', async ({ page }) => {

        console.log("Click On Create contacts Button-----describe");
        console.log("Enter firstName");
        console.log("Enter secondName");
        console.log("Enter companyName");
        console.log("Click on save button");

    });


    test('test-case-create-organization', async ({ page }) => {

        console.log("Click On Create organization Button------describe");
        console.log("Enter firstName");
        console.log("Enter secondName");
        console.log("Enter companyName");
        console.log("Click on save button");

    });
})



test.describe("smoke",async () => {
    test('test-case-create-invoices', async ({ page }) => {
        console.log("Click On Create invoices Button-----describe");
        console.log("Enter firstName");
        console.log("Enter secondName");
        console.log("Enter companyName");
        console.log("Click on save button");
    });


    test('test-case-create-compaigns', async ({ page }) => {
        console.log("Click On Create compaigns Button------describe");
        console.log("Enter firstName");
        console.log("Enter secondName");
        console.log("Enter companyName");
        console.log("Click on save button");
    });
})



