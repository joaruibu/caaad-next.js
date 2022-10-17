import Script from 'next/script'
import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, pagina }) => {
    return (
        <div className='container mx-auto px-3'>
            <Head>
                <title>Caaad-{pagina}</title>
                <meta name="description" content="Bloques de autocad gratis" />
                {/* <script src="https://kit.fontawesome.com/52fed5dcd0.js" crossOrigin="anonymous" async /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            {children}
            <Footer />

            <Script src="https://kit.fontawesome.com/52fed5dcd0.js" crossOrigin="anonymous" async strategy="lazyOnload" />
        </div>
    )
}

export default Layout
