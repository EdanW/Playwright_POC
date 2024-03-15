import { test, expect } from '@playwright/test';

test('is it 18 degrees somewhere', async ({ page }) => {
  await page.goto('https://www.accuweather.com//');

  await expect(page.getByText('18°').first()).toBeVisible();
});
