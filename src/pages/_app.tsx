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
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1625106868943701"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
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
