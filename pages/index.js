import Head from 'next/head'
import Link from 'next/link'
import AddSidebar from '../components/AddSidebar'
import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import TagBox from '../components/TagBox'


export default function Home() {

  return (
    <Layout
      pagina="Bloques gratis de Autocad">

      <h1>Desde Inicio</h1>
      <Link href="/nosotros">A Nosotros</Link>

      <main className='grid grid-cols-1  md:grid-cols-[160px_1fr_160px] md:gap-9'>
        <div className=' md:col-start-2 md:col-end-3'>
          <h1 className='text-center font-normal tracking-tight text-3xl lg:text-6xl p-6 pb-12'>
            <span className='block'>Descarga 4302 bloques</span>
            <span> de Autocad  gratis</span>
          </h1>
          <SearchBar />
        </div>

        <div className='hidden md:block md:col-start-1 md:col-end-2'>
          <TagBox ></TagBox>
        </div>
        <div className='hidden md:block  md:col-start-3'>
          <AddSidebar />
        </div>



        <div></div>
      </main>
    </Layout>

  )
}
