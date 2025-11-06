import { test, expect } from '@playwright/test';

test('home loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /βιώσιμες λύσεις/i })).toBeVisible();
  await page.getByRole('link', { name: /επικοινωνήστε μαζί μας/i }).first().click();
  await expect(page).toHaveURL(/contact/);
});


