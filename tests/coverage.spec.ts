import { test } from './baseFixtures';
import { expect } from '@playwright/test';
import * as fs from 'fs';

const url = 'http://localhost:5173/';

test('has title', async ({ page }) => {
  await page.goto(url);
  await expect(page).toHaveTitle(/Wilbur/);
});

