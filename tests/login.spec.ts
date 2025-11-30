import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Hooks } from '../hooks/hooks';

const hooks = new Hooks();

test.beforeAll(async ({ browser }) => {
  await hooks.beforeAll(browser);
});

test.afterAll(async () => {
  await hooks.afterAll();
});

test.describe('Automation Exercise Login', () => {

  test('Successful login with valid credentials', async ({ page }, testInfo) => {
    const login = new LoginPage(page);

    await page.goto('/login');
    await login.login('ziedhannachi0@gmail.com', '$Z4J2ra!U98h!');
    await page.waitForTimeout(5000);
  });

  test('Login fails with invalid credentials', async ({ page }, testInfo) => {
    const login = new LoginPage(page);

    await page.goto('/login');
    await login.login('ziedhannachi0@gmail.com', '$Z4J2ra!U98h!');
    await page.waitForTimeout(5000);

  });

});
