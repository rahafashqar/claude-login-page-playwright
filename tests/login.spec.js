import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {

  test('Successful Login', async ({ page }) => {
    await page.goto('');
    await page.locator('#email').fill('demo@nightvault.io');
    await page.locator('#password').fill('Passw0rd1');
    await page.getByRole('button', { name: 'Unlock Vault' }).click();

    await expect(page.getByText(/successfully logged in/i)).toBeVisible();
  });

  test('Login Validation', async ({ page }) => {
    await page.goto('');
    await page.getByRole('button', { name: 'Unlock Vault' }).click();

    await expect(page.getByText(/email.*required/i)).toBeVisible();
    await expect(page.getByText(/password.*required/i)).toBeVisible();
  });

  test('Password Show and Hide', async ({ page }) => {
    await page.goto('');

    const passwordInput = page.locator('#password');
    const eyeButton = page.locator('#eyeBtn');

    await passwordInput.fill('Passw0rd1');
    await expect(passwordInput).toHaveAttribute('type', 'password'); // هل بالأصل مخفي
    await eyeButton.click(); // أظهرناه
    await expect(passwordInput).toHaveAttribute('type', 'text');
    await eyeButton.click(); // أخفيناه
    await expect(passwordInput).toHaveAttribute('type', 'password');
    });
});
