
import { useRouter } from 'next/router';
import React from 'react'
import { allCategories } from '../../assets/categories';
import { allTags } from '../../assets/tags';

import AddSidebar from '../../components/AddSidebar';
import BlockList from '../../components/BlockList';
import Layout from '../../components/Layout';
import dbConnect from "../../lib/dbConnect";
import Block from "../../models/Block";


const TagPage = ({ blocksFilterByTag, params, numberBlocks }) => {
    const { locale } = useRouter()


    const checkTagAppearsAlone = () => {
        const tag = allTags.find(tag => tag.value === params.id);


        if (tag.noTagAlone === true) {
            const category = allCategories.find(category => category.tags.includes(params.id))

            return `${locale === 'es' ? `${category.label_ES} ${tag.label_ES}` : ` ${category.label} ${tag.label}`}`

        } else {
            return `${tag[locale === 'es' ? 'label_ES' : 'label']}`
        }
    }


    return (
        < Layout
            pagina={locale === 'es' ?
                `Descarga  bloques de ${checkTagAppearsAlone()}de Autocad  gratis`
                :
                `Download free autocad ${checkTagAppearsAlone()} blocks`
            }>

            <main className='grid grid-cols-1 gap-9  md:grid-cols-[160px_1fr_160px] md:gap-9'>
                <div className='col-start-1 col-end-4 lg:col-start-2 lg:col-end-3'>
                    <h1 className='text-center font-bold tracking-tight text-4xl lg:text-6xl p-6 pb-6 md:pb-12'>

                        {locale === 'es' ?
                            <>
                                <span className='block'>Descarga {numberBlocks} bloques de {checkTagAppearsAlone()}</span>
                                <span> de Autocad  gratis</span>
                            </>
                            :
                            <>
                                <span className='block'>Download {numberBlocks} free autocad </span>
                                <span> {checkTagAppearsAlone()} blocks</span>
                            </>
                        }

                    </h1>
                </div>

                <div className='hidden md:block md:col-start-1 md:col-end-2'>
                    <AddSidebar />

                </div>
                <div className=' md:col-start-2 md:col-end-3'>
                    <BlockList blocks={blocksFilterByTag} />
                </div>

                <div className='hidden md:block  md:col-start-3'>
                    {/* <AddSidebar /> */}
                </div>

            </main>

        </ Layout>
    )
}

export default TagPage


export async function getStaticPaths() {

    try {
        const paths = allTags.map(tag => {
            return {
                params: { id: tag.value },
                locale: 'en'
            }
        });
        const paths_ES = allTags.map(tag => {
            return {
                params: { id: tag.value },
                locale: 'es'
            }
        });

        return {
            paths: [...paths, ...paths_ES],
            fallback: false
        }

    } catch (error) {

    }
}

export async function getStaticProps({ params }) {
    try {
        await dbConnect()

        const result = await Block.find({ tags: params.id });

        const blocksFilterByTag = result.map((doc) => {
            const block = doc.toObject()
            block._id = block._id.toString()
            return block
        })
        return {
            props: {
                blocksFilterByTag,
                numberBlocks: blocksFilterByTag.length,
                params
            }
        }
    } catch (error) {
        console.log(error)
        return { props: { success: false, error: 'Error!' } }
    }
}

//Codigo previos con SSP funciona 
// export async function getServerSideProps({ params }) {

//     try {
//         await dbConnect()

//         const result = await Block.find({ tags: params.id });

//         const blocksFilterByTag = result.map((doc) => {
//             const block = doc.toObject()
//             block._id = block._id.toString()
//             return block
//         })
//         return {
//             props: {
//                 blocksFilterByTag,
//                 numberBlocks: blocksFilterByTag.length,
//                 params
//             }
//         }
//     } catch (error) {
//         console.log(error)
//         return { props: { success: false, error: 'Error!' } }
//     }
// }