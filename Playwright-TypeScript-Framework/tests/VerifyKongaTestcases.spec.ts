import { test } from '@playwright/test';
import { LoginPage } from '../pages-e-commerce/LoginPage.ts';
import { HomePage } from '../pages-e-commerce/HomePage.ts';
import { SearchPage } from '../pages-e-commerce/SearchPage.ts';
import { ProductPage } from '../pages-e-commerce/ProductPage.ts';
import { CartPage } from '../pages-e-commerce/CartPage.ts';

test('Buy Product', async ({ page }) => {

    const login = new LoginPage(page);
    const home = new HomePage(page);
    const search = new SearchPage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await page.goto("https://www.konga.com");

    await login.login("jay@test.com", "12345");

    await home.searchProduct("iPhone");

    await search.selectProduct("Apple iPhone 15");

    await product.addProduct();

    await cart.proceedCheckout();

});