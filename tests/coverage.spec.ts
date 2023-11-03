import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import v8toIstanbul from 'v8-to-istanbul';
import { removeMapFileComments } from 'convert-source-map';
import * as fs from 'fs';

const url = 'http://localhost:5173/';

test('has title', async ({ page }) => {
  await page.coverage.startJSCoverage();
  await page.goto(url);
  await expect(page).toHaveTitle(/Wilbur/);
  const coverage = await page.coverage.stopJSCoverage();
  for (const entry of coverage) {
    // const converter = v8toIstanbul('', 0, { source: entry.source });
    const converter = v8toIstanbul('', 0, { source: removeMapFileComments(entry.source) });
    await converter.load();
    converter.applyCoverage(entry.functions);
    const json = JSON.stringify(converter.toIstanbul());

    // write to file
    fs.writeFileSync(`.nyc_output/coverage-${entry.scriptId}.json`, json);

  }
});

