import Head from "next/head";
import '../styles/global.css';
import { AuthProvider } from '../context/Auth';

export default function myApp({ Component, pageProps }) {
return (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </>
)
}