import urlNotFound from "../404";
import React from "react";
import dbConnect from "../../lib/dbConnect";
import Block from "../../models/Block";
import Layout from "../../components/Layout";
import AddSidebar from "../../components/AddSidebar";
import Image from "next/image";
import { createDesCription } from "../../helpers";
import Link from "next/link";

const BlockPage = ({ success, error, block }) => {
  const { _id, category, date, description, downloads, dwg, filters, img, tags, title } = block

  console.log(1, success)
  console.log(2, error)
  console.log(3, block)
  if (!success) {
    return <urlNotFound error={error}></urlNotFound>
  }
  return (

    <Layout
      pagina={`Descargar bloque ${title}`}>

      <main className='grid grid-cols-1 gap-9 md:grid-cols-[300px_1fr_300px] md:gap-9'>
        <div className='hidden md:block  md:col-start-1'>
          <AddSidebar />
        </div>

        <div className='md:col-start-2 md:col-end-3 grid grid-cols-2 gap-12'>
          <Image layout="responsive" width={250} height={165} alt={`Bloque de autocad ${title}`} src={img} priority />
          <div>
            <div className="mb-4">
              <p className="font-bold block w-full">Title: </p>
              <p className=" font-normal text-gray-500">{title}</p>
            </div>
            <div className="mb-4">
              <p className="font-bold block w-full">Description: </p>
              <p className=" font-normal text-xs text-gray-500">{createDesCription(tags, category)}</p>
            </div>
            <div className="mb-4">
              <p className="mb-3 font-bold block w-full">Tags: </p>
              <div className="flex flex-wrap gap-2">

                {tags.map(tag => (
                  <a className=" p-1 rounded-md font-normal cursor-pointer whitespace-nowrap text-xs border border-orange-600 text-orange-600" key={tag.id}>{tag.label}</a>
                ))}
                {filters.map(filter => (
                  <a className=" p-1 rounded-md font-normal cursor-pointer whitespace-nowrap text-xs border border-orange-600 text-orange-600" key={filter.id}>{filter.label}</a>
                ))}
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
      return { props: { success: false, error: 'Película no encontrada!' } }

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
