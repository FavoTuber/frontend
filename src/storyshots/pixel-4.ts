import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// Pixel4 1080 x 2280
const customizePage = (page) =>
  page.emulate({
    name: '1080 x 2280',
    userAgent: 'Mozilla/5.0',
    viewport: {
      width: 360,
      height: 760,
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      isLandscape: false,
    },
  });

initStoryshots({
  test: imageSnapshot({ customizePage }),
});
