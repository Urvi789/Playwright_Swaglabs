const { expect } = require('@playwright/test');


exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zip = '#postal-code';
    this.continueBtn = '#continue';
    this.finishBtn = '#finish';
  }

  async fillDetails(fname, lname, zip) {
    await this.page.fill(this.firstName, fname);
    await this.page.fill(this.lastName, lname);
    await this.page.fill(this.zip, zip);
  }

  async completeOrder() {
    await this.page.click(this.continueBtn);
    await this.page.click(this.finishBtn);
  }
};
