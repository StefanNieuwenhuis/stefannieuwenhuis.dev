const puppeteer = require('puppeteer');
let browser;
let page;

describe('Google', () => {
    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });
    
    it('should display "google" text on page', async () => {
        await page.goto('https://google.com');
        await expect(page).toMatch('google');
        await browser.close();
      })
});