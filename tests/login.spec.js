const { test, expect } = require('@playwright/test');

const { LoginPage } = require("../pages/LoginPage");

test.describe('Login feature to Swag Labs website', () => {
    test('Login to SwagLabs website with valid user details', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        // Save session storage (cookies + localStorage)
  await page.context().storageState({ path: 'storageState.json' });
    })

    test('Login using invalid details', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'invalid_password');
        await page.click('#login-button');
        const errorMessage = await page.textContent('[data-test="error"]');
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    })
    

    
})
