import React from 'react'
import FormAddBlock from '../components/FormAddBlock'
import Layout from '../components/Layout'

const addNewBlock = () => {

    return (
        <Layout pagina='upload'>
            <main className='grid grid-cols-[160px_1fr_160px] gap-9'>
                <div className='col-start-2 cold-end-3'>
                    <FormAddBlock />
                </div>
            </main >
        </Layout >
    )
}

export default addNewBlock
