const { test, expect } = require('@playwright/test');

exports.ConfirmationPage = class ConfirmationPage {
  constructor(page) {
    this.page = page;
  }

  async verifyConfirmation() {
    
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
};
