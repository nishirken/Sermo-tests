import { hostName, testPassword, testEmail } from '../config';

describe('Auth', () => {
  it('Show login', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.click('[data-e2e="login-link"]');
    await page.waitFor('[data-e2e="login-page"]');
    await page.screenshot({ path: 'screenshots/login-page.png' });
  });

  it('Show signin', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.click('[data-e2e="signin-link"]');
    await page.waitFor('[data-e2e="signin-page"]');
    await page.screenshot({ path: 'screenshots/signin-page.png' });
  });

  it('Login and enter inside app', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.waitFor('[data-e2e="login-page"]');
    await page.type('[data-e2e="login-email"]', testEmail);
    await page.type('[data-e2e="login-password"]', testPassword);
    await page.click('[data-e2e="login-submit"]');
    await page.waitFor('[data-e2e="app"]');
    await page.screenshot({ path: 'screenshots/a-page.png' });
  });
});
