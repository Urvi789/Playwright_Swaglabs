const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');


test('Complete e-commerce order flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.verifyLogin();
  await productsPage.addProductToCart();
  await productsPage.goToCart();

  await cartPage.verifyItemInCart('Sauce Labs Backpack');
  await cartPage.clickCheckout();

  await checkoutPage.fillDetails('Urvi', 'Talekar', '411001');
  await checkoutPage.completeOrder();

  await confirmationPage.verifyConfirmation();
});
