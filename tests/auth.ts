import { hostName, } from '../config'

describe('Auth', () => {
  it('Login', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await page.screenshot({ path: 'screenshots/login.png' });
    await page.click('button');
    await page.waitForNavigation();
    await page.screenshot({ path: 'screenshots/app.png' });
    await expect(page).toMatch('Application');
  });
});
