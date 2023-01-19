import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>HEIC to PNG | Convert HEIC to PNG</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Convert HEIC to PNG" />
        <meta name="author" content="Leckie" />
        <meta
          name="keyword"
          content="HEIC, PNG, Convert, convert heic, convert png, heic to png"
        />
        <meta property="og:title" content="HEICtoPNG" />
        <meta property="og:description" content="Convert HEIC to PNG" />
      </Head>
      <Analytics />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
