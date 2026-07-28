import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { HomePage } from "../pages/HomePage.ts";
import { LeadPage } from "../pages/LeadsModule/LeadsPage.ts";
import { LeadDetailsPage } from "../pages/LeadsModule/LeadDetailsPage.ts";

type PageFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    leadPage: LeadPage;
    leadDeatilsPage: LeadDetailsPage;
}

const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    leadPage: async ({ page }, use) => {
        await use(new LeadPage(page));
    },
    
    leadDeatilsPage: async ({ page }, use) => {
        await use(new LeadDetailsPage(page));
    }

});