const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = '#checkout';
  }

  async verifyItemInCart(itemName) {
    
    await expect(this.page.locator('.inventory_item_name')).toHaveText(itemName);
  }

  async clickCheckout() {
    await this.page.click(this.checkoutBtn);
  }
};
