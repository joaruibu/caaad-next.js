import '../styles/normalize.css'
import '../styles/globals.css'

import { ContextProvider } from '../context'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {

  return (
    <ContextProvider >
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy='afterInteractive' />

      <Script
        id='GA'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`
        }} />

      < Component {...pageProps} />
      <Analytics />
    </ContextProvider>
  )
}

export default MyApp
