import React from 'react'
import Layout from '../components/Layout'
import { useApp } from '../context'


const Contact = () => {
    const { locale } = useApp()

    return (

        <Layout pagina={locale === 'es' ? 'Privacidad' : 'Privacy'} >
            <main className='grid grid-cols-1 md:grid-cols-[160px_1fr_160px] gap-9'>
                <div className='col-start-1 md:col-start-2 md:col-end-3'>
                    <h1 className='block text-center font-extrabold tracking-tight text-4xl lg:text-6xl p-6 pb-12'>
                        {locale === 'es' ? 'Privacidad' : 'Privacy'}
                    </h1>
                    {locale === 'es' ? <>
                        <p className='pb-6 text-gray-500'>SPANISH TEXT-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat pharetra tristique. Integer nulla elit, lobortis eget venenatis a, efficitur eget sapien. Cras vehicula vitae metus eu blandit. Proin vulputate rhoncus volutpat. Maecenas quam diam, fringilla ut risus a, maximus porta odio. Nulla porta tortor leo, dictum rhoncus urna porta non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis placerat lectus, quis viverra turpis. Sed finibus, lacus sit amet bibendum tincidunt, libero ipsum suscipit orci, id varius elit elit vel ligula. Mauris bibendum, orci ac facilisis convallis, erat odio lobortis quam, sollicitudin dapibus lectus mi et arcu. Nunc ornare maximus aliquet. Vestibulum pulvinar eros sed odio sodales, id molestie eros finibus.</p>
                        <p className='pb-6  text-gray-500'>SPANISH TEXT-Proin dignissim, purus eget tempus aliquam, enim tortor facilisis tortor, vel ornare massa magna et mauris. Praesent nunc neque, tempus at tempus ut, facilisis in magna. Phasellus vitae tellus ullamcorper metus hendrerit vestibulum nec ut felis. Sed eu pulvinar ipsum. Proin id dui ullamcorper, maximus ipsum et, egestas dui. Sed vitae neque purus. Sed placerat volutpat eros, eget pretium quam facilisis sed. Aenean quis molestie dui, eget porttitor nisl. Cras sed aliquam lectus. Aliquam est tellus, faucibus non suscipit feugiat, sollicitudin venenatis tortor. Nunc mauris ipsum, interdum vitae cursus a, euismod ut mauris. Nunc pulvinar lorem vulputate rhoncus suscipit. Morbi pulvinar sit amet purus nec varius. Nunc dictum id ipsum id imperdiet. Morbi fermentum ipsum ut lacus iaculis, id faucibus elit euismod. Sed pharetra lorem vel ultricies ullamcorper.</p>


                    </> : <>
                        <p className='pb-6 text-gray-500'>ENGLISH TEXT-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat pharetra tristique. Integer nulla elit, lobortis eget venenatis a, efficitur eget sapien. Cras vehicula vitae metus eu blandit. Proin vulputate rhoncus volutpat. Maecenas quam diam, fringilla ut risus a, maximus porta odio. Nulla porta tortor leo, dictum rhoncus urna porta non. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quis placerat lectus, quis viverra turpis. Sed finibus, lacus sit amet bibendum tincidunt, libero ipsum suscipit orci, id varius elit elit vel ligula. Mauris bibendum, orci ac facilisis convallis, erat odio lobortis quam, sollicitudin dapibus lectus mi et arcu. Nunc ornare maximus aliquet. Vestibulum pulvinar eros sed odio sodales, id molestie eros finibus.</p>
                        <p className='pb-6  text-gray-500'>ENGLISH TEXT-Proin dignissim, purus eget tempus aliquam, enim tortor facilisis tortor, vel ornare massa magna et mauris. Praesent nunc neque, tempus at tempus ut, facilisis in magna. Phasellus vitae tellus ullamcorper metus hendrerit vestibulum nec ut felis. Sed eu pulvinar ipsum. Proin id dui ullamcorper, maximus ipsum et, egestas dui. Sed vitae neque purus. Sed placerat volutpat eros, eget pretium quam facilisis sed. Aenean quis molestie dui, eget porttitor nisl. Cras sed aliquam lectus. Aliquam est tellus, faucibus non suscipit feugiat, sollicitudin venenatis tortor. Nunc mauris ipsum, interdum vitae cursus a, euismod ut mauris. Nunc pulvinar lorem vulputate rhoncus suscipit. Morbi pulvinar sit amet purus nec varius. Nunc dictum id ipsum id imperdiet. Morbi fermentum ipsum ut lacus iaculis, id faucibus elit euismod. Sed pharetra lorem vel ultricies ullamcorper.</p>

                    </>}

                </div>
            </main>
        </Layout>
    )
}

export default Contact