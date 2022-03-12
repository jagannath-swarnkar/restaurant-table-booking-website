import Document, { Html, Head, Main, NextScript } from "next/document";
import * as config from "../utils/config";

class MyDocument extends Document {
  render() {
    const APPNAME = config.APP_NAME;
    const DESC = config.APP_DESCRIPTION;
    const IMAGE = config.APP_ICON;
    const TITLE = config.APP_NAME;
    const COLOR = config.PRIMARY_COLOR;
    const APPLE_TOUCH_ICON = config.APPLE_TOUCH_ICON;
    const FAV_ICON16 = config.FAV_ICON16;
    const FAV_ICON36 = config.FAV_ICON36;
    const DEFAULT_LANGUAGE = config.DEFAULT_LANGUAGE;

    return (
      <Html lang={DEFAULT_LANGUAGE}>
        <Head>
          <meta charSet="UTF-8"></meta>
          <link rel="icon" href={IMAGE} type="image/png" sizes="16x16"></link>
          <meta name="application-name" content={APPNAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content={TITLE} />
          <meta name="description" content={DESC} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-TileColor" content={COLOR} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={COLOR} />

          <link rel="icon" type="image/png" sizes="32x32" href={FAV_ICON16} />
          <link rel="icon" type="image/png" sizes="16x16" href={FAV_ICON36} />
          <link rel="manifest" href="/menifest.json" />
          <link rel="shortcut icon" href={FAV_ICON36} />
          
          <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
          <link href="ico/fav/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
          <link href="ico/fav/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
          <link href="ico/fav/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png"/>
          <link href="ico/ati/ati-57x57.png" rel="apple-touch-icon" sizes="57x57"/>
          <link href="ico/ati/ati-60x60.png" rel="apple-touch-icon" sizes="60x60"/>
          <link href="ico/ati/ati-72x72.png" rel="apple-touch-icon" sizes="72x72"/>
          <link href="ico/ati/ati-76x76.png" rel="apple-touch-icon" sizes="76x76"/>
          <link href="ico/ati/ati-114x114.png" rel="apple-touch-icon" sizes="114x114"/>
          <link href="ico/ati/ati-120x120.png" rel="apple-touch-icon" sizes="120x120"/>
          <link href="ico/ati/ati-144x144.png" rel="apple-touch-icon" sizes="144x144"/>
          <link href="ico/ati/ati-152x152.png" rel="apple-touch-icon" sizes="152x152"/>
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
