import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const customizePage = (page) =>
  page.emulate({
    name: 'iPad Pro',
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    viewport: {
      width: 1024,
      height: 1366,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  });

initStoryshots({
  test: imageSnapshot({ customizePage }),
});
