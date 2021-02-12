import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// MBP 13 inch 1440 x 900
const customizePage = (page) =>
  page.emulate({
    name: '1440 x 900',
    userAgent: 'Mozilla/5.0',
    viewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: true,
      isLandscape: false,
    },
  });

initStoryshots({
  test: imageSnapshot({ customizePage }),
});
