import { test, expect } from '@playwright/test';

const viewports = [
  { width: 320, height: 568, name: 'mobile-small' },
  { width: 375, height: 667, name: 'mobile' },
  { width: 768, height: 1024, name: 'tablet' },
  { width: 1024, height: 768, name: 'desktop' },
  { width: 1920, height: 1080, name: 'desktop-large' },
];

test.describe('Responsive Design', () => {
  for (const viewport of viewports) {
    test(`home page renders correctly on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      // Check main heading is visible
      await expect(page.getByRole('heading', { name: /βιώσιμες λύσεις/i })).toBeVisible();
      
      // Check navigation is visible (desktop) or hamburger menu (mobile)
      if (viewport.width >= 768) {
        await expect(page.getByRole('navigation')).toBeVisible();
        await expect(page.getByRole('link', { name: /ποιοι είμαστε/i })).toBeVisible();
      } else {
        // Mobile: check hamburger button exists
        const menuButton = page.getByRole('button', { name: /άνοιγμα μενού/i });
        if (await menuButton.count() > 0) {
          await expect(menuButton).toBeVisible();
        }
      }
      
      // Check CTA section is visible and responsive
      const ctaSection = page.locator('section').filter({ hasText: /θέλετε να συζητήσουμε/i });
      await expect(ctaSection).toBeVisible();
      
      // Check features section
      await expect(page.getByText(/ανάλυση εδάφους/i).first()).toBeVisible();
      
      // Check footer is visible
      await expect(page.getByRole('contentinfo')).toBeVisible();
    });

    test(`header navigation works on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      
      if (viewport.width >= 768) {
        // Desktop: direct navigation
        await page.getByRole('link', { name: /υπηρεσίες/i }).click();
        await expect(page).toHaveURL(/\/services/);
      } else {
        // Mobile: open menu first
        const menuButton = page.getByRole('button', { name: /άνοιγμα μενού/i });
        await menuButton.click();
        await expect(page.getByRole('navigation').getByRole('link', { name: /υπηρεσίες/i })).toBeVisible();
        await page.getByRole('navigation').getByRole('link', { name: /υπηρεσίες/i }).click();
        await expect(page).toHaveURL(/\/services/);
      }
    });
  }
});

