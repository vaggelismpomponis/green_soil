import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('has proper semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check main landmarks
    await expect(page.getByRole('banner')).toBeVisible(); // header
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible(); // footer
    
    // Check navigation has aria-label
    const nav = page.getByRole('navigation');
    await expect(nav).toHaveAttribute('aria-label', /κύρια πλοήγηση/i);
  });

  test('has skip link for keyboard navigation', async ({ page }) => {
    await page.goto('/');
    
    const skipLink = page.locator('a[href="#main"]');
    await expect(skipLink).toBeVisible();
    
    // Check it's visually hidden but accessible
    const styles = await skipLink.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        position: computed.position,
        width: computed.width,
        height: computed.height,
      };
    });
    
    // Should be positioned absolutely and have sr-only class
    expect(styles.position).toBe('absolute');
  });

  test('all interactive elements have focus states', async ({ page }) => {
    await page.goto('/');
    
    // Test focus on links
    const firstLink = page.getByRole('link', { name: /ποιοι είμαστε/i }).first();
    await firstLink.focus();
    
    // Check focus ring is visible (check for focus-visible class or ring)
    const focusedStyles = await firstLink.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        outline: computed.outline,
        outlineWidth: computed.outlineWidth,
      };
    });
    
    // Should have focus styles (either outline or ring)
    expect(focusedStyles.outlineWidth !== '0px' || focusedStyles.outline !== 'none').toBeTruthy();
  });

  test('contact form has proper label associations', async ({ page }) => {
    await page.goto('/contact');
    
    // Check all inputs have associated labels
    const fullNameInput = page.getByLabel(/ονοματεπώνυμο/i);
    await expect(fullNameInput).toBeVisible();
    await expect(fullNameInput).toHaveAttribute('id');
    
    const emailInput = page.getByLabel(/^email$/i);
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    
    const messageTextarea = page.getByLabel(/μήνυμα/i);
    await expect(messageTextarea).toBeVisible();
    
    // Check required fields have aria-required
    await expect(fullNameInput).toHaveAttribute('aria-required', 'true');
    await expect(emailInput).toHaveAttribute('aria-required', 'true');
    await expect(messageTextarea).toHaveAttribute('aria-required', 'true');
  });

  test('hamburger menu has proper ARIA attributes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const menuButton = page.getByRole('button', { name: /άνοιγμα μενού/i });
    await expect(menuButton).toBeVisible();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('form has proper error handling with ARIA', async ({ page }) => {
    await page.goto('/contact');
    
    // Try to submit without filling required fields
    const submitButton = page.getByRole('button', { name: /αποστολή/i });
    await submitButton.click();
    
    // Check browser validation (or custom validation)
    const fullNameInput = page.getByLabel(/ονοματεπώνυμο/i);
    const isInvalid = await fullNameInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });
});

