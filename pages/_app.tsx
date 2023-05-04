import type { AppProps } from "next/app";
import "@/css/style.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>

            <Head>
                <title>Столярная мастерская</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Tenor+Sans&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <Component {...pageProps} />
        </>
    );
}
