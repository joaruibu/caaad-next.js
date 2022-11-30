import AddSidebar from '../components/AddSidebar'
import Layout from '../components/Layout'
import BlockList from '../components/BlockList'
import SearchBar from '../components/SearchBar'
import TagSidebar from '../components/TagSidebar'
import dbConnect from '../lib/dbConnect'
import Block from '../models/Block'
import { useApp } from '../context'



export default function Home({ blocks, numberBlocks }) {

  const { locale } = useApp()

  return (

    <Layout
      pagina="Bloques gratis de Autocad">

      <main className='grid grid-cols-1   md:grid-cols-[160px_1fr_160px] md:gap-9'>
        <div className='col-start-1 col-end-4 lg:col-start-2 lg:col-end-3'>
          <h1 className='text-center font-bold  text-4xl lg:text-6xl p-6 pb-6 md:pb-12'>
            {locale === 'es' ? <>
              <span className='block'>{ }Descarga {numberBlocks} bloques</span>
              <span>  de Autocad gratis</span>
            </>
              :
              <>
                <span className='block'>{ }Free download </span> <span>{numberBlocks} Autocad blocks</span>
              </>

            }
          </h1>
          <SearchBar />
        </div>

        <div className='hidden md:block md:col-start-1 md:col-end-2'>
          <TagSidebar />
        </div>
        <div className=' md:col-start-2 md:col-end-3'>

          <BlockList blocks={blocks} />
        </div>

        <div className='hidden md:block  md:col-start-3'>
          <AddSidebar />
        </div>

      </main>

    </Layout >
  )

}


export async function getServerSideProps() {
  try {
    await dbConnect()
    const result = await Block.find({})
    const blocks = result.map((doc) => {
      const block = doc.toObject()
      block._id = block._id.toString()
      return block
    })
    return {
      props: {
        blocks,
        numberBlocks: blocks.length

      }
    }
  } catch (error) {
    console.log(error)
    return { props: { success: false, error: 'Error!' } }
  }
}

