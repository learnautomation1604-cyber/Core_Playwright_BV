import {test} from '@playwright/test';
import Utility from '../tests/Utility';


test('Search', async ({page}) => {
    // locator keyword only for CSS selector and xpath values
    await page.goto('https://www.walgreens.com/');
    
    await page.locator('input#ntt-placeholder').fill("Wipes");
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    // await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
    // await page.locator('button#gh-search-btn').click();
    await page.locator('h1.header-left-content-h1').isVisible();
    await page.waitForTimeout(5000);
    await page.goBack();
    await page.waitForTimeout(5000);
//     await page.goForward();
//     // await page.waitForTimeout(5000);
//     // await page.reload();
//     // await page.waitForTimeout(5000);

});

test('Search123', async ({page}) => {

    await page.goto('https://www.ebay.com/');
    await Utility.Errorpage({page});
    await page.getAttribute("//div[@class='gh-search-input__wrap']", "id");
    await page.getByAltText('eBay Logo').click();

    // await page.getByRole('link', { name: 'Electronics' }).click();
    // await page.getByLabel('link', { name: 'Cell Phones & Accessories' }).click();
    await page.getByTitle('Cell Phones & Smartphones').click();
    await page.locator("//div[@class='gh-search-input__wrap']").fill("iphone");
    await page.locator('button#gh-search-btn').click();
    await page.locator('h1#srp-results-heading').isVisible();
});

test('Search for Laptop', async ({page})=>{
        await page.goto('https://www.ebay.com/');
        await Utility.Errorpage({page});
        await page.locator("//div[@class='gh-search-input__wrap']").fill("laptop");
        await page.locator('button#gh-search-btn').click();
        await page.locator('h1#srp-results-heading').isVisible();
});




test('Mouse Actions', async({page})=>{

    await page.goto('https://www.walgreens.com/');
    await page.locator('input#ntt-placeholder').type("Wipes");
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(5000);
    
    const srp_title = await page.locator("//h1[@class='title-xx-large semi-bold']");

    // await page.waitForTimeout(5000);
    await srp_title.isVisible();

    await page.locator("(//div[@id='wag-header-logo-container'])[1]").hover();
    await page.waitForTimeout(2000);
    // await page.locator("(//div[@id='wag-header-logo-container'])[1]").dblclick();
    // await page.waitForTimeout(2000);
    await srp_title.highlight();
    await page.waitForTimeout(2000);
    
    const footerlink =await page.locator('div.footer__logo');
    await footerlink.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await footerlink.click({button: 'right'});
    await page.keyboard.press('ArrowDown', {delay: 2000});
    await page.keyboard.press('ArrowDown', {delay: 2000});
    await page.keyboard.press('ArrowDown', {delay: 2000});
    // await page.waitForTimeout(2000);
    // await page.mouse.move(0, 1000);
    // // await page.mouse.click(0, 1000, {button: 'right', clickCount: 10, delay: 1000
    // // });
    // await page.mouse.wheel(0, 1000);

    // await page.mouse.wheel(0, -1000);

    // await page.mouse.move(0, 0);

    // await page.mouse.down();

    // await page.mouse.up();

    // await page.mouse.dblclick(0, 0);

});

test('Mouse Action - Drag and Drop', async({page})=>{
    await page.goto('https://demoqa.com/droppable');
    // await page.dragAndDrop("//div[@id='draggable']", "//div[@id='droppable']//p[text()='Drop Here']");
    const source = page.locator("//div[@id='draggable']");
    const target = page.locator("//div[@id='droppable']//p[text()='Drop Here']");
    await source.dragTo(target);



});



test('Mouse Action - Keyboard Actions', async({page})=>{
    await page.goto('https://demoqa.com/droppable');
    await page.keyboard.press('ArrowDown', {delay: 2000});
    await page.keyboard.press('ArrowDown', {delay: 2000});
    await page.keyboard.press('ArrowDown', {delay: 2000});
    await page.keyboard.press('Tab', {delay: 2000});
    // Combination of keys
    await page.keyboard.down('Control+V');
    await page.keyboard.up('Control+C');

    


});


test("Handling dropdown", async({page})=>{

    await page.goto('https://www.ebay.com/');

    await Utility.Errorpage({page});

    await page.locator("//input[@id='gh-ac']").fill("iphone");

    // await page.locator("//select[@name='_sacat']").selectOption({value: '20081'});

    await page.locator("//button[@id='gh-search-btn']").click();

    // await page.locator("//select[@name='_sacat']").selectOption([{label: 'Business & Industrial'}, {label: 'Cell Phones & Accessories'}]);
    
    
});



