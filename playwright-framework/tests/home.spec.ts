import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Check the title of the page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  const headerText = await homePage.getHeaderText();
  expect(headerText).toContain('WoodStore');
});