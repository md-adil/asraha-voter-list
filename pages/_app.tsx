import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-T8MRR49GFG"></script>
  <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T8MRR49GFG');`}} />
  </Head>
  <Component {...pageProps} />
  </>
}
export default MyApp
