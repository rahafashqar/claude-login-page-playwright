import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test('Successful Login', async ({ page }) => {
    await page.goto('');
    await page.locator('#email').fill('demo@nightvault.io');
    await page.locator('#password').fill('Passw0rd1');
    await page.getByRole('button', { name: 'Unlock Vault' }).click();

    await expect(page.getByText(/successfully logged in/i)).toBeVisible();
  });

});