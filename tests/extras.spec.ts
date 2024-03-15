import { test, expect } from '@playwright/test';

test('is the position still open', async ({ page }) => {
    await page.goto('https://www.docontrol.io/');
    await page.getByRole('navigation').getByRole('link').nth(2).click();
    await page.getByPlaceholder('Search…').click();
    await page.getByPlaceholder('Search…').fill('career');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'DoControl | Automated SaaS' }).click();
    await page.frameLocator('iframe[name="comeet-careers-1710441727058-337470"]').getByRole('link', { name: 'QA Automation Engineer' }).isVisible();
    await page.close();
});

test('is the world population normal (using JS)', async ({ page }) => {
    await page.goto('https://www.worldometers.info/world-population/');

    var popText = await page.locator('#maincounter-wrap div').innerText();
    popText = popText.replace(/,/g, '' );
    const popBigInt = BigInt(popText);

    await expect(popBigInt).toBeGreaterThan(7000000000);
    await expect(popBigInt).toBeLessThan(9000000000);
    await page.close();

});