import { BasePage } from './base-page.js';

export class GooglePage extends BasePage {
    url = 'https://google.com';
    searchInput = '[name="q"]';

    constructor(page) {
        super(page);
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async search(value) {
        await this.page.type(this.searchInput, value);
        await this.page.keyboard.press('Enter');
    }
}
