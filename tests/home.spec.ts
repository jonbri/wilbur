import { test } from './baseFixtures';
import { expect } from '@playwright/test';

const url = 'http://localhost:5173/';

test('has title', async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Wilbur/);
});

test('click on button', async ({ page }) => {
  await page.goto(url);
  await expect(page.getByTestId('count')).toHaveText('0');
  await page.getByRole('button', { name: 'Click me' }).click();
  await expect(page.getByTestId('count')).toHaveText('1');
});
