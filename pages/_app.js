import '../styles/normalize.css'
import '../styles/globals.css'
// import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

import { ContextProvider } from '../context'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


function MyApp({ Component, pageProps }) {

  return (
    <ContextProvider >
      < Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      {/* <CustomCursor
        targets={['.cursorHover']}
        customClass='custom-cursor'
        dimensions={30}
        fill='#ea580c'
        opacity={1}
        targetOpacity={0.4}
        targetScale={1.8}
      /> */}
    </ContextProvider>
  )
}

export default MyApp
