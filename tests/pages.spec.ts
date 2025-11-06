import { test, expect } from '@playwright/test';

test.describe('All Pages Load Correctly', () => {
  const pages = [
    { path: '/', title: /βιώσιμες λύσεις/i },
    { path: '/about', title: /ποιοι είμαστε/i },
    { path: '/services', title: /υπηρεσίες/i },
    { path: '/projects', title: /έργα/i },
    { path: '/contact', title: /επικοινωνία/i },
    { path: '/legal/privacy', title: /πολιτική απορρήτου/i },
    { path: '/legal/terms', title: /όροι χρήσης/i },
    { path: '/legal/cookies', title: /πολιτική cookies/i },
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.path} loads and displays correctly`, async ({ page }) => {
      await page.goto(pageInfo.path);
      
      // Check page loads (no 404 or 500)
      await expect(page).toHaveURL(new RegExp(pageInfo.path.replace(/\//g, '\\/')));
      
      // Check main heading exists
      const heading = page.getByRole('heading', { name: pageInfo.title });
      await expect(heading).toBeVisible();
      
      // Check header and footer are present
      await expect(page.getByRole('banner')).toBeVisible();
      await expect(page.getByRole('contentinfo')).toBeVisible();
      
      // Check no console errors
      const errors: string[] = [];
      page.on('console', (msg) => {
        if (msg.type() === 'error') {
          errors.push(msg.text());
        }
      });
      
      // Wait a bit for any async errors
      await page.waitForTimeout(1000);
      
      // Filter out known non-critical errors (like GA if not loaded)
      const criticalErrors = errors.filter(e => !e.includes('gtag') && !e.includes('analytics'));
      expect(criticalErrors.length).toBe(0);
    });
  }
});

test.describe('Navigation Works', () => {
  test('can navigate between all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to about
    await page.getByRole('link', { name: /ποιοι είμαστε/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
    
    // Navigate to services
    await page.getByRole('link', { name: /υπηρεσίες/i }).first().click();
    await expect(page).toHaveURL(/\/services/);
    
    // Navigate to projects
    await page.getByRole('link', { name: /έργα/i }).first().click();
    await expect(page).toHaveURL(/\/projects/);
    
    // Navigate to contact
    await page.getByRole('link', { name: /επικοινωνία/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
    
    // Navigate back home
    await page.getByRole('link', { name: /green soil/i }).click();
    await expect(page).toHaveURL('/');
  });

  test('footer links work', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to privacy policy
    await page.getByRole('link', { name: /πολιτική απορρήτου/i }).click();
    await expect(page).toHaveURL(/\/legal\/privacy/);
    
    // Navigate to terms
    await page.getByRole('link', { name: /όροι χρήσης/i }).click();
    await expect(page).toHaveURL(/\/legal\/terms/);
    
    // Navigate to cookies
    await page.getByRole('link', { name: /πολιτική cookies/i }).click();
    await expect(page).toHaveURL(/\/legal\/cookies/);
  });
});

