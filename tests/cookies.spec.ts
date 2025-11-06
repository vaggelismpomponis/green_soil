import { test, expect } from '@playwright/test';

test.describe('Cookie Consent', () => {
  test('cookie banner appears on first visit', async ({ page, context }) => {
    // Clear cookies and localStorage
    await context.clearCookies();
    await page.goto('/');
    
    // Wait for cookie banner to appear
    const cookieBanner = page.locator('text=χρησιμοποιούμε cookies').first();
    await expect(cookieBanner).toBeVisible({ timeout: 2000 });
  });

  test('cookie banner can be accepted', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/');
    
    // Wait for banner
    await page.waitForSelector('text=αποδοχή επιλογών', { timeout: 2000 });
    
    // Accept cookies
    const acceptButton = page.getByRole('button', { name: /αποδοχή επιλογών/i });
    await acceptButton.click();
    
    // Banner should disappear
    await expect(page.locator('text=χρησιμοποιούμε cookies').first()).not.toBeVisible();
    
    // Check localStorage was set
    const consent = await page.evaluate(() => {
      return localStorage.getItem('cookie-consent');
    });
    
    expect(consent).toBeTruthy();
    const parsed = JSON.parse(consent!);
    expect(parsed.essential).toBe(true);
  });

  test('cookie banner can be rejected', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/');
    
    // Wait for banner
    await page.waitForSelector('text=απόρριψη', { timeout: 2000 });
    
    // Reject cookies
    const rejectButton = page.getByRole('button', { name: /απόρριψη/i });
    await rejectButton.click();
    
    // Banner should disappear
    await expect(page.locator('text=χρησιμοποιούμε cookies').first()).not.toBeVisible();
    
    // Check localStorage was set
    const consent = await page.evaluate(() => {
      return localStorage.getItem('cookie-consent');
    });
    
    expect(consent).toBeTruthy();
    const parsed = JSON.parse(consent!);
    expect(parsed.analytics).toBe(false);
  });

  test('cookie banner does not appear on subsequent visits', async ({ page, context }) => {
    // Set consent in localStorage
    await page.goto('/');
    await page.evaluate(() => {
      localStorage.setItem('cookie-consent', JSON.stringify({ essential: true, analytics: false }));
    });
    
    // Reload page
    await page.reload();
    
    // Banner should not appear
    const cookieBanner = page.locator('text=χρησιμοποιούμε cookies').first();
    await expect(cookieBanner).not.toBeVisible({ timeout: 1000 });
  });

  test('analytics checkbox can be toggled', async ({ page, context }) => {
    await context.clearCookies();
    await page.goto('/');
    
    // Wait for banner
    await page.waitForSelector('text=analytics', { timeout: 2000 });
    
    // Find analytics checkbox (second checkbox, first is disabled essential)
    const checkboxes = page.locator('input[type="checkbox"]');
    const analyticsCheckbox = checkboxes.nth(1); // Second checkbox is analytics
    
    // Toggle analytics
    await analyticsCheckbox.check();
    
    // Accept with analytics enabled
    const acceptButton = page.getByRole('button', { name: /αποδοχή επιλογών/i });
    await acceptButton.click();
    
    // Check localStorage
    const consent = await page.evaluate(() => {
      return localStorage.getItem('cookie-consent');
    });
    
    const parsed = JSON.parse(consent!);
    expect(parsed.analytics).toBe(true);
  });
});

