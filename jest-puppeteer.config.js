const width = 1920;
const height = 1024;

module.exports = {
  launch: {
    headless: JSON.parse(process.env.HEADLESS),
    slowMo: parseInt(process.env.SLOW_MO),
    ignoreHTTPSErrors: true,
    args: [
      '--enable-features=NetworkService',
      `--window-size=${width},${height}`
    ],
    defaultViewport: {
      width,
      height,
    }
  },
};