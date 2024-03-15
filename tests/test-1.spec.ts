import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://cloudtesting.contosotraders.com/');
  await page.getByPlaceholder('Search by product name or').click();
  await page.getByPlaceholder('Search by product name or').fill('xbox');
  await page.getByPlaceholder('Search by product name or').press('Enter');
  await page.getByRole('img', { name: 'Xbox Wireless Controller Lunar Shift Special Edition' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByLabel('cart').click();
  await expect(page.locator('.innerCart > div:nth-child(2) > div > div').first()).toBeVisible();

  await page.getByRole('link', { name: 'Rem' }).click();
  await expect(page.locator('.innerCart > div:nth-child(2) > div > div').first()).not.toBeVisible();


});