
import React from "react";
import dbConnect from "../../lib/dbConnect";
import Block from "../../models/Block";
import Layout from "../../components/Layout";
import AddSidebar from "../../components/AddSidebar";
import Image from "next/image";

import Link from "next/link";
import BadgeTag from "../../components/BadgeTag";
import FilterTag from "../../components/BadgeFilter"
import UrlNotFound from "../404";
import SimilarBlock from "../../components/SimilarBlock";



const BlockPage = ({ success, error, block }) => {
  if (!success) {
    return <UrlNotFound error={error} />
  }

  const { dwg, description, categories, filters, img, tags, title } = block

  return (

    <Layout
      pagina={`Descargar bloque ${title}`}>

      <main className='grid grid-cols-1 gap-9 md:grid-cols-[160px_1fr_160px] content-start md:gap-9 min-h-screen'>
        <div className='hidden md:block md:col-start-1'>
          <AddSidebar />
        </div>
        <div className='md:col-start-2 md:col-end-3 grid grid-rows-none grid-cols-1 xl:grid-cols-2 gap-12'>
          <div className="relative border border-orange-600 rounded-3xl overflow-hidden">
            <Image layout="fill" width={250} height={165} alt={`Bloque de autocad ${title}`} src={img} priority />
          </div>
          <div>
            <div className="mb-4">
              <p className="font-bold block w-full">Title: </p>
              <p className=" font-bold text-xl text-orange-500">{title}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold block w-full">Description: </p>
              <p className=" font-normal text-gray-500">{description}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold block w-full">Category: </p>
              {categories.map((category, i) => {
                return <p key={i} className=" font-normal text-gray-500">{category}</p>
              })}
            </div>

            <div className="mb-4">
              <p className="mb-3 font-bold block w-full">Filters: </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                  return <BadgeTag
                    key={index}
                    tag={tag}
                    icon={false}
                  />
                })
                }
                {filters.map((filter, index) => {
                  return <FilterTag
                    key={index}
                    filter={filter}
                    icon={false}
                  />
                })
                }
              </div>
            </div>
            <Link href={dwg} passHref >
              <a className="w-full block text-center cursor-pointer p-3 bg-orange-600 text-white">Descagar bloque </a>
            </Link>
          </div>
        </div>

        <div className='hidden md:block  md:col-start-3'>
          <AddSidebar />
        </div>
        <div className='hidden md:block  md:col-start-2'>
          <SimilarBlock />
        </div>


      </main>
    </Layout>
  )
};



export default BlockPage;


export async function getServerSideProps({ params }) {
  try {
    await dbConnect()
    const block = await Block.findById(params.id).lean()
    block._id = ` ${block._id}`
    if (!block)
      return { props: { success: false, error: 'Bloque no encontrada!' } }

    return {
      props: { success: true, block }
    }

  } catch (error) {
    console.log(error)
    if (error.kind === 'ObjectId') {
      return { props: { success: false, error: 'Te has invetando la dirección' } }
    }
    return { props: { success: false, error: 'Error de servidor' } }
  }
}
