import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const Nosotros = () => {
    return (

        <Layout
            pagina="Nosotros">
            <h1>Desdes nostros</h1>
            <Link href="/">A Inicio</Link>
        </Layout>

    )
}

export default Nosotros