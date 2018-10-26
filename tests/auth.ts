import { hostName, } from '../config'

describe('Auth', () => {
  it('should display "google" text on page', async () => {
    await page.goto(`${hostName}/src/Main.elm`);
    await expect(page).toMatch('App')
  });
});
