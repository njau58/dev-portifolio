import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "./../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import ScrollToTop from "../utils/ScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import Loader from "../components/Loader/Loader";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  let persistor = persistStore(store)
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Y6RHM3LPJH"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y6RHM3LPJH', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <Provider store={store}>
        <>
          {loading ? (
            <Loader loading={loading}></Loader>
          ) : (
            <>
              <ScrollToTop></ScrollToTop>
              <ToastContainer theme={"colored"} />
           <Component {...pageProps} />
           

          
            </>
          )}
        </>
      </Provider>

      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/636e1695daff0e1306d6e1ab/1ghj0gf5d"
      />
    </>
  );
}

export default MyApp;
  

//persist state by wrapping component with
     //<PersistGate persistor={persistor}></PersistGate>