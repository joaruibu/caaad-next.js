import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const Nosotros = () => {
    return (

        <Layout
            pagina="Nosotros">
            <h1>Desdes nostros</h1>
            <Link href="/" passHref>
                <a> A Inicio</a>
            </Link >
        </Layout>

    )
}

export default Nosotros