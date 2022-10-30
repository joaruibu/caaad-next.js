import '../styles/normalize.css'
import '../styles/globals.css'
import Script from 'next/script'
import { useApp } from '../context'



function MyApp({ Component, pageProps }) {
  const { isCookies } = useApp()
  return (
    <>
      {
        isCookies &&
        <>
          <Script
            strategy='lazyOnload'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

          <Script
            id='GA'
            strategy='lazyOnload'>
            {
              `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
            }

          </Script>
        </>
      }
      < Component {...pageProps} />
    </>)
}

export default MyApp
