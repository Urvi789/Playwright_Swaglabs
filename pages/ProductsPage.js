const { expect } = require('@playwright/test');

exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productTitle = '.title';
    this.addToCartBtn = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  async verifyLogin() {
    await this.page.waitForSelector(this.productTitle);
    await expect(this.page.locator(this.productTitle)).toHaveText(/products/i);
  }

  async addProductToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
};
