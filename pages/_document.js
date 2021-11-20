import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="w-full h-full bg-white text-black text-lg">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="w-full h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
