import Script from 'next/script'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import CookiesBanner from '../components/CookiesBanner'

import { useApp } from '../context'

const Layout = ({ children, pagina }) => {
    const { cookiesAccepted, locale } = useApp()
    const title = `Download cad block-${pagina}`
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={locale === 'es' ? 'Descarga bloques de autocad gratis, descarga los mejores bloques de autocad.' : 'Dowload free autocad blocks, download de best autocad block'} />
                <meta httpEquiv="content-language" content={locale}></meta>
                <meta name='robots' content='index, follow'></meta>
                <link rel="icon" href="/favicon.png" />
            </Head>
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

            <div className='container mx-auto px-3'>
                <Header />
                {children}
                {cookiesAccepted === false ? <CookiesBanner /> : ''

                }
                <Footer />
                <Script src="https://kit.fontawesome.com/52fed5dcd0.js" crossOrigin="anonymous" async strategy="lazyOnload" />
            </div>
        </>
    )
}

export default Layout
