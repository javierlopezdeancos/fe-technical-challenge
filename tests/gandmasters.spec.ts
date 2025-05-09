import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("http://localhost:5173");
  await expect(page).toHaveTitle("Amenitiz front-end technical challenge");
});

test('click into a grandmaster link should go to grandmaster profile page', async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.locator('#grandmasters-list li').first().click()
  await expect(page.getByRole('heading', { name: 'Grandmaster' })).toBeVisible();
});
