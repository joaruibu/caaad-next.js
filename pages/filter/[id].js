
import React from 'react'
import { allFilters } from '../../assets/filters';
import AddSidebar from '../../components/AddSidebar';
import BlockList from '../../components/BlockList';
import Layout from '../../components/Layout';
import dbConnect from "../../lib/dbConnect";
import Block from "../../models/Block";

const TagPage = ({ blocksFilterByFilter, params }) => {
    console.log(blocksFilterByFilter)
    return (
        <Layout
            pagina="Bloques gratis de Autocad">

            <main className='grid grid-cols-1 gap-9  md:grid-cols-[160px_1fr_160px] md:gap-9'>
                <div className='col-start-1 col-end-4 lg:col-start-2 lg:col-end-3'>
                    <h1 className='text-center font-normal tracking-tight text-4xl lg:text-6xl p-6 pb-6 md:pb-12'>
                        <span className='block'>Descarga bloques de {allFilters.find(filter => filter.value === params.id).label}</span>
                        <span> de Autocad  gratis</span>
                    </h1>
                </div>

                <div className='hidden md:block md:col-start-1 md:col-end-2'>
                    <AddSidebar />

                </div>
                <div className=' md:col-start-2 md:col-end-3'>
                    <BlockList blocks={blocksFilterByFilter} />
                </div>

                <div className='hidden md:block  md:col-start-3'>
                    <AddSidebar />
                </div>

            </main>

        </Layout>
    )
}

export default TagPage


export async function getServerSideProps({ params }) {

    try {
        await dbConnect()

        const result = await Block.find({ filters: params.id });

        const blocksFilterByFilter = result.map((doc) => {
            const block = doc.toObject()
            block._id = block._id.toString()
            return block
        })
        return {
            props: {
                blocksFilterByFilter,
                params
            }
        }
    } catch (error) {
        console.log(error)
        return { props: { success: false, error: 'Error!' } }
    }
}