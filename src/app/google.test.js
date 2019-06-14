const puppeteer = require('puppeteer');
let browser;
let page;

describe('Google', () => {
    beforeEach(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should open a new page', async () => {
        await page.goto('https://google.com');
        await browser.close();
    })

    it('should display "google" text on page', async () => {
        await expect(page).toMatch('google');
      })
});