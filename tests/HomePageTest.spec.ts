const { test, expect } = require('@playwright/test');

test('Home Page', async ({page}) => {

    await page.goto('https://demoblaze.com/index.html');

    const pageTitle = page.title();


    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();

    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    console.log('page title issss: ', pageTitle);
    console.log('page URL issss: ', pageURL);

    pageTitle.then(tt => {
        console.log(tt);
    })

    await page.close();

});