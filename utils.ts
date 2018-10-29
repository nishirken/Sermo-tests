import { Page } from 'puppeteer';
import { pathExists, mkdir } from 'fs-extra';
import { join } from 'path';
import looksSame from 'looks-same';

const screenshotsFolder = 'screenshots';
export const screenshotVerification = async (page: Page, screenshotName: string): Promise<boolean> => {
	const originalPath = join(process.cwd(), screenshotsFolder, screenshotName);
	const isExists = await pathExists(originalPath);

	if (!isExists) {
		await page.screenshot({ path: originalPath, });
		return true;
	}

	const isTmpExists = await pathExists(join(process.cwd(), screenshotsFolder, 'tmp'));
	if (!isTmpExists) {
		await mkdir(join(process.cwd(), screenshotsFolder, 'tmp'));
	}

	const tmpPath = join(process.cwd(), screenshotsFolder, 'tmp', screenshotName);
	await page.screenshot({ path: tmpPath });

	const res = await (
		new Promise<boolean>((resolve, reject) => {
			looksSame(originalPath, tmpPath, (error, equal) => {
				if (error) {
					reject(error);
				}
				resolve(equal);
			});
		})
	);

	return res;
};
