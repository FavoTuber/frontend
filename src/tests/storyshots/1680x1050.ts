import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// MBP 13 inch 1680 x 1050
const customizePage = (page) =>
  page.emulate({
    name: '1680 x 1050',
    userAgent: 'Mozilla/5.0',
    viewport: {
      width: 1680,
      height: 1050,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: true,
      isLandscape: false,
    },
  });

initStoryshots({
  test: imageSnapshot({ customizePage }),
});
