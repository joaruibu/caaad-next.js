import { useRouter } from 'next/router'
import React from 'react'
import BlockItem from './BlockItem'


const SimilarBlock = ({ similarBlocks }) => {
    const { locale } = useRouter()


    return (
        <>
            <h3 className='mb-3 font-bold block w-full'>{locale === 'es' ? 'Descarga bloques de Autocad similares' : 'Download similar Autocad blocks'} </h3>
            <div className='w-full overflow-x-auto  rounded-3xl p-3'>
                <div className='w-96 flex space-x-6'>
                    {similarBlocks.map(block => {
                        return <BlockItem key={block._id} block={block} similarBlock={true} ></BlockItem>
                    })}

                </div>
            </div>
        </>

    )
}

export default SimilarBlock
