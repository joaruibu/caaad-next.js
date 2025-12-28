import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const UrlNotFound = ({ error }) => {

    return (
        <Layout pagina='404'>
            <main className='grid grid-cols-[160px_1fr_160px] gap-9'>
                <div className='col-start-2 col-end-3'>
                    <h1 className='hidden md:block text-center font-extrabold tracking-tight text-6xl p-6 pb-12'>
                        Uppps... esta página no existe{error | JSON}
                    </h1>
                    <Link href="/">
                        Ver más bloques</Link>
                </div>
            </main>
        </Layout>
    )
}

export default UrlNotFound
