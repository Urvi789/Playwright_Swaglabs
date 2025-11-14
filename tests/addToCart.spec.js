const { test, expect } = require('@playwright/test');

const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test.use({ storageState: 'storageState.json' }); // Reuse saved login session

test.describe('Add to cart and checkout feature', () => {
    test('Add a product to cart and perform the checkout action', async ({ page }) => {

        const productsPage = new ProductsPage(page);
        const cartPage = new CartPage(page);

        await productsPage.verifyLogin();
        await productsPage.addProductToCart();
        await productsPage.goToCart();

        await cartPage.verifyItemInCart('Sauce Labs Backpack');
        await cartPage.clickCheckout();
    })


})
