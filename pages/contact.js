import React from 'react'
import Layout from '../components/Layout'
import { useApp } from '../context'


const Contact = () => {
    const { locale } = useApp()

    return (

        <Layout pagina={locale === 'es' ? 'Contacto' : 'Contact'} >

            <main className='grid grid-cols-1 md:grid-cols-[160px_1fr_160px] gap-9'>
                <div className='col-start-1 md:col-start-2 md:col-end-3'>
                    <h1 className='block text-center font-extrabold tracking-tight text-4xl lg:text-6xl p-6 pb-12'>
                        {locale === 'es' ? 'Contacto' : 'Contact'}
                    </h1>
                    {locale === 'es' ? <>
                        <p className='pb-6 text-gray-500 text-center h-screen'>!Hola! Puedes escribirnos a <a href='mailto:info@beinteriordesigner.com' className='text-bold underline'> info@beinteriordesigner.com</a> 😊</p>



                    </> : <>
                        <p className='pb-6 text-gray-500 text-center h-screen'> Hi! You can write us at <a href='mailto:info@beinteriordesigner.com' className='text-bold underline'> info@beinteriordesigner.com</a> 😊</p>
                    </>}

                </div>
            </main>
        </Layout>
    )
}

export default Contact