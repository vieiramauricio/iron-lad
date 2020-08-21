import GlobalStyle from '../styles/global';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet"/>
      </Head>
    
      <GlobalStyle/>
      <Component {...pageProps} />  
    </>
  )
}

export default MyApp
