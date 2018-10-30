import { pathExists, mkdir } from 'fs-extra';
import { join } from 'path';
import looksSame from 'looks-same';

const screenshotsFolder = 'screenshots';
export const screenshotVerification = async (screenshotName: string): Promise<boolean | void> => {
	try {
		const originalPath = join(process.cwd(), screenshotsFolder, screenshotName);
		const isExists = await pathExists(originalPath);

		if (!isExists) {
			await page.screenshot({ path: originalPath, });
			return true;
		}

		const tmpFolder = join(process.cwd(), screenshotsFolder, 'tmp');
		const isTmpExists = await pathExists(tmpFolder);
		if (!isTmpExists) {
			await mkdir(tmpFolder);
		}

		const tmpPath = join(tmpFolder, screenshotName);
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
	} catch (error) {
		console.error('Error with screenshot verification', error);
	}
};
