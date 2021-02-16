import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import customTheme from 'theme';

class DefaultDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default DefaultDocument;
