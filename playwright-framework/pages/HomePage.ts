import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly header;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h1');
  }

  async goto() {
    await this.page.goto('/');
  }

  async getHeaderText() {
    return this.header.textContent();
  }
}