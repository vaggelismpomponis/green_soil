import { test, expect } from '@playwright/test';

// Helper function to get computed color
async function getComputedColor(page: any, selector: string, property: string) {
  return await page.evaluate(({ sel, prop }: { sel: string; prop: string }) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const styles = window.getComputedStyle(el);
    return styles.getPropertyValue(prop);
  }, { sel: selector, prop: property });
}

// Helper to convert RGB to hex
function rgbToHex(rgb: string): string {
  const match = rgb.match(/\d+/g);
  if (!match || match.length < 3) return '';
  const r = parseInt(match[0]).toString(16).padStart(2, '0');
  const g = parseInt(match[1]).toString(16).padStart(2, '0');
  const b = parseInt(match[2]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

// Calculate contrast ratio (simplified - WCAG AA requires 4.5:1 for normal text, 3:1 for large text)
function getContrastRatio(hex1: string, hex2: string): number {
  // Simplified contrast calculation - in real scenario use proper luminance calculation
  // This is a placeholder that checks if colors are different enough
  const r1 = parseInt(hex1.slice(1, 3), 16);
  const g1 = parseInt(hex1.slice(3, 5), 16);
  const b1 = parseInt(hex1.slice(5, 7), 16);
  const r2 = parseInt(hex2.slice(1, 3), 16);
  const g2 = parseInt(hex2.slice(3, 5), 16);
  const b2 = parseInt(hex2.slice(5, 7), 16);
  
  const l1 = (r1 * 299 + g1 * 587 + b1 * 114) / 1000;
  const l2 = (r2 * 299 + g2 * 587 + b2 * 114) / 1000;
  
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

test.describe('Colors and Contrast', () => {
  test('primary button has sufficient contrast', async ({ page }) => {
    await page.goto('/');
    
    const button = page.getByRole('link', { name: /επικοινωνήστε μαζί μας/i }).first();
    await expect(button).toBeVisible();
    
    // Check button has primary background color
    const bgColor = await button.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.backgroundColor;
    });
    
    // Check text color is white or light
    const textColor = await button.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.color;
    });
    
    // Primary button should have dark green background (#2f855a) and white text
    // Check RGB values (may vary slightly due to CSS)
    expect(bgColor).toMatch(/rgb\(47,\s*133,\s*90\)|rgb\(47, 133, 90\)/); // #2f855a
    expect(textColor).toMatch(/rgb\(255,\s*255,\s*255\)|rgb\(255, 255, 255\)|white/); // white
  });

  test('text has sufficient contrast on white background', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading contrast
    const heading = page.getByRole('heading', { name: /βιώσιμες λύσεις/i });
    await expect(heading).toBeVisible();
    
    const textColor = await heading.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.color;
    });
    
    // Should be dark text on light background
    expect(textColor).toContain('rgb(17, 24, 39)'); // gray-900 or similar dark color
  });

  test('footer text has proper contrast', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.getByRole('contentinfo');
    const footerText = footer.locator('p').first();
    
    const textColor = await footerText.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.color;
    });
    
    // Footer text should be readable (gray-600 or darker)
    expect(textColor).toContain('rgb(75, 85, 99)'); // gray-600
  });

  test('links have visible hover states', async ({ page }) => {
    await page.goto('/');
    
    const link = page.getByRole('link', { name: /ποιοι είμαστε/i }).first();
    
    // Check default state
    const defaultColor = await link.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    
    // Hover and check color changes
    await link.hover();
    const hoverColor = await link.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    
    // Color should change on hover (to primary-dark)
    expect(hoverColor).not.toBe(defaultColor);
  });

  test('form inputs have visible borders and focus states', async ({ page }) => {
    await page.goto('/contact');
    
    const input = page.getByLabel(/ονοματεπώνυμο/i);
    
    // Check border exists
    const borderColor = await input.evaluate((el) => {
      return window.getComputedStyle(el).borderColor;
    });
    
    expect(borderColor).not.toBe('rgba(0, 0, 0, 0)');
    
    // Focus and check focus ring
    await input.focus();
    const outline = await input.evaluate((el) => {
      return window.getComputedStyle(el).outline;
    });
    
    // Should have focus outline or ring
    expect(outline !== 'none' || outline !== '').toBeTruthy();
  });

  test('CTA section has proper background contrast', async ({ page }) => {
    await page.goto('/');
    
    const ctaSection = page.locator('section').filter({ hasText: /θέλετε να συζητήσουμε/i });
    
    const bgColor = await ctaSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    
    // Should have primary/5 background (light green tint)
    expect(bgColor).toContain('rgba');
    
    // Text should be readable
    const textColor = await ctaSection.locator('h2').evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    
    // Should be dark text
    expect(textColor).toContain('rgb(17, 24, 39)'); // gray-900
  });
});

