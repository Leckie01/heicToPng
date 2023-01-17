import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <ins
            className="kakao_ad_area"
            style={{ display: "none" }}
            data-ad-unit="DAN-C3tQI8PPi8QNyAcs"
            data-ad-width="300"
            data-ad-height="250"
          ></ins>
          <script
            type="text/javascript"
            src="//t1.daumcdn.net/kas/static/ba.min.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}
