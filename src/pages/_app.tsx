import React from 'react';
import Head from 'next/head';
import customTheme from 'theme';
import { ChakraProvider } from '@chakra-ui/react';

interface Props {
  pageProps: any;
  Component: any;
}

export default class App extends React.Component<Props> {
  render(): JSX.Element {
    const { pageProps, Component } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
          />
        </Head>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </>
    );
  }
}
