import puppeteer from 'puppeteer';
import chai from 'chai';
import { GooglePage } from './google-page.js';

let expect = chai.expect;

describe('suite', function () {
    this.timeout(10000);
    let browser;
    let googlePage;

    before('init browser', async function () {
        browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.setDefaultTimeout(5000);

        googlePage = new GooglePage(page);
    });

    it('test google', async function () {
        await googlePage.goto();
        await googlePage.search('speedtest');
    });

    after('close browser', async function () {
        await browser.close();
    });
});
