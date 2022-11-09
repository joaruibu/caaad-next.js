import '../styles/normalize.css'
import '../styles/globals.css'

import { ContextProvider } from '../context'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {

  return (
    <ContextProvider >
      < Component {...pageProps} />
      <Analytics />
    </ContextProvider>
  )
}

export default MyApp
