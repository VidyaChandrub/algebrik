import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="keywords" content="React Nextjs Template Iteck Multi-Purpose themeforest" />
          <meta name="description" content="Iteck - Multi-Purpose React.js Next.js Template" />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/assets/img/fav.png" title="Favicon" sizes="16x16" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap" />
          {/* <!-- Google tag (gtag.js) --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-B5T9VV81L5"></script>
          <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-B5T9VV81L5');
          </script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
