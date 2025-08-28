import { test, expect } from '@playwright/test';

test('home page has heading', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'ComptaPilot' }),
  ).toBeVisible();
});
