import { test, expect } from '@playwright/test';

// This test checks whether at some city it is 18 degrees.
// It uses some JS, ElementHandle and $$ function
test('it is 18 degrees somewhere by ElementHandle', async ({ page }) => {
  await page.goto('https://www.accuweather.com//');
  
  const cities = await page.$$('[class="text temp"]');
  var isEighteenSomewhere = false;
  for (const city of cities) {
    console.log (city);
    const currTemp = await city.innerText();
    console.log (currTemp);
    if (currTemp == "18°"){
      isEighteenSomewhere = true;
      break;
    }
  }

  expect(isEighteenSomewhere).toBe(true);
  await page.close();
});