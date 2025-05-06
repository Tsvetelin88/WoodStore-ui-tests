import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Check the title of the page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();

  const headerText = await homePage.getHeaderText();
  expect(headerText).toContain('Home');
});

test('Check button Add to cart', async ({ page }) => {
    const homePage = new HomePage(page);
  await homePage.goto();

  const headerText = await homePage.getHeaderText();
  expect(headerText).toContain('Home');
  
  await page.getByRole('paragraph').filter({ hasText: 'Sofa1' }).click();
  await page.getByText('Price:').click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
});