import { hostName, testPassword, testEmail } from '../config';
import { screenshotVerification } from '../utils';

describe('Auth', () => {
  it('Show login', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.click('[data-e2e="login-link"]');
    await page.waitFor('[data-e2e="login-page"]');
    await expect(screenshotVerification('login-page.png')).resolves.toBeTruthy();
  });

  it('Show signin', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.click('[data-e2e="signin-link"]');
    await page.waitFor('[data-e2e="signin-page"]');
		await expect(screenshotVerification('signin-page.png')).resolves.toBeTruthy();
  });

  it('Login and enter inside app', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.waitFor('[data-e2e="login-page"]');
    await page.type('[data-e2e="login-email"]', testEmail);
    await page.type('[data-e2e="login-password"]', testPassword);
    await page.click('[data-e2e="login-submit"]');
    await page.waitFor('[data-e2e="app"]');
		await expect(screenshotVerification('app-page.png')).resolves.toBeTruthy();
  });
});
