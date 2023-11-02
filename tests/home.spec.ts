import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page).toHaveTitle(/Wilbur/);
});

test('click on button', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('count')).toHaveText('0');
  await page.getByRole('button', { name: 'Click me' }).click();
  await expect(page.getByTestId('count')).toHaveText('1');
});
