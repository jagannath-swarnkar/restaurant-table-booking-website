import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import LoaderHoc from "../hoc/LoaderHoc";
import { login } from "../redux/Actions/Config.action";
import store from "../redux/Store";
import "../styles/bootstrap.css";
import "../styles/globals.css";
import { APP_NAME } from "../utils/config";
import { setCookie } from "../utils/session";
function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const payload = {
            email: "jaganswornkar1998@gmail.com",
            password: "jagan.coder",
        };
        login(payload)
            .then((response) => {
                const result = response.data.data;
                setCookie("token", result.token);
                setCookie("email", result.email);
                setCookie("uid", result.userId);
                setCookie("profilePic", result.profilePic);
                setCookie("username", result.username);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <React.Fragment>
            <Head>
                <title>{APP_NAME}</title>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
                <LoaderHoc />
            </Provider>
        </React.Fragment>
    );
}

export default MyApp;
