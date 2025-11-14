const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');

test('E2E: login, add to cart and complete checkout on SwagLabs', async ({ page }) => {
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

  await checkoutPage.fillDetails('Test', 'User', '12345');
  await checkoutPage.completeOrder();

  await confirmationPage.verifyConfirmation();
});
