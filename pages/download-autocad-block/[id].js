import React from "react";
import dbConnect from "../../lib/dbConnect";
import Block from "../../models/Block";
import Layout from "../../components/Layout";
import AddSidebar from "../../components/AddSidebar";
import Image from "next/image";

import Link from "next/link";
import BadgeTag from "../../components/BadgeTag";
import FilterTag from "../../components/BadgeFilter";
import UrlNotFound from "../404";
import SimilarBlock from "../../components/SimilarBlock";
import { useRouter } from "next/router";
import BadgeCategory from "../../components/BadgeCategorie";

const BlockPage = ({ success, error, block, similarBlocks }) => {
  const {
    dwg,
    description,
    description_ES,
    categories,
    filters,
    img,
    tags,
    title,
    title_ES,
  } = block;
  const { locale } = useRouter();

  useRouter();
  if (!success) {
    return <UrlNotFound error={error} />;
  }

  return (
    <Layout
      pagina={
        locale === "es"
          ? `Descargar bloque de autocad ${title_ES}`
          : `Download ${title} cad block`
      }
    >
      <main className="grid grid-cols-1 gap-9 md:grid-cols-[160px_1fr_160px] content-start md:gap-9 min-h-screen">
        <div className="hidden md:block md:col-start-1">
          {/* <AddSidebar /> */}
        </div>
        <div className="md:col-start-2 md:col-end-3 grid grid-rows-none grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="relative border border-orange-600 rounded-3xl bg-white overflow-hidden grid content-center">
            <Image
              width={250}
              height={165}
              style={{ width: '100%', height: 'auto' }}
              alt={
                locale === "es"
                  ? `Descargar bloque autoCAD ${title_ES}`
                  : `Download ${title}  cad block`
              }
              src={img}
              priority
              unoptimized={true}
            />
          </div>
          <div>
            <div className="mb-4">
              <p className="font-bold block w-full">
                {locale === "es" ? `Título:` : `Title:`}{" "}
              </p>
              <h1 className=" font-bold text-xl text-orange-500">
                {locale === "es"
                  ? `Descargar bloque autoCAD ${title_ES}`
                  : `Download cad block ${title}`}
                .
              </h1>
            </div>
            <div className="mb-4">
              <p className="font-bold block w-full">
                {locale === "es" ? `Descripción:` : `Description:`}{" "}
              </p>
              <p className=" font-normal text-gray-500">
                {locale === "es" ? `${description_ES}` : `${description}`}
              </p>
            </div>
            <div className="mb-4">
              <p className="mb-3 font-bold block w-full">
                {locale === "es" ? `Categoría:` : `Category:`}{" "}
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => {
                  return <BadgeCategory key={index} category={category} />;
                })}
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-3 font-bold block w-full">
                {locale === "es" ? `Filtros:` : `Filters:`}{" "}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => {
                  return <BadgeTag key={index} tag={tag} icon={false} />;
                })}
                {filters.map((filter, index) => {
                  return <FilterTag key={index} filter={filter} icon={false} />;
                })}
              </div>
            </div>
            <Link href={dwg} passHref>
              <a className="cursorHover w-full block rounded-full text-lg uppercase text-center p-3 bg-orange-600 hover:bg-orange-700 transition-all text-white">
                {locale === "es"
                  ? `Descargar bloque de autoCAD gratis`
                  : `Download free CAD block`}{" "}
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden md:block  md:col-start-3">
          {/* <AddSidebar /> */}
        </div>
        <div className="block  md:col-start-2 w-full mt-12">
          <SimilarBlock similarBlocks={similarBlocks} />
        </div>
      </main>
    </Layout>
  );
};

export default BlockPage;

export async function getStaticPaths() {
  try {
    await dbConnect();
    const result = await Block.find({});

    // Mapeo todos los objetos del array para 'limpiar' la propiedad _id
    const blocks = result.map((doc) => {
      const block = doc.toObject();
      block._id = block._id.toString();
      return block;
    });

    const paths = blocks.slice(0, 20).map(({ _id, title }) => {
      const splitTitle = title.replaceAll(" ", "-");
      return {
        params: { id: `${splitTitle.toLowerCase()}-${_id}` },
        locale: "en",
      };
    });

    const paths_ES = blocks.slice(0, 20).map(({ _id, title_ES }) => {
      const splitTitle = title_ES.replaceAll(" ", "-");
      return {
        params: { id: `${splitTitle.toLowerCase()}-${_id}` },
        locale: "es",
      };
    });

    return {
      paths: [...paths, ...paths_ES],
      fallback: "blocking",
    };
  } catch (error) {}
}

export async function getStaticProps({ params: { id } }) {
  //la Url está compuesta por título - id
  const newId = id.split("-").pop();

  try {
    await dbConnect();
    const block = await Block.findById(newId).lean();
    block._id = block._id.toString();

    // Buscar como hacer la busqueda del titulo similar al actual
    const similarResults = (
      await Block.find({ tags: block.tags }).limit(10)
    ).reverse();

    const similarBlocks = similarResults
      .map((ele) => {
        const block = ele.toObject();
        block._id = block._id.toString();
        return block;
      })
      // Eliminamos el bloque en el que estamos
      .filter((ele) => ele._id !== newId);

    if (!block)
      return {
        props: {
          success: false,
          error: "Bloque no encontrado!",
        },
      };

    return {
      props: {
        success: true,
        block,
        similarBlocks,
      },
    };
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return {
        props: { success: false, error: "Te has invetando la dirección" },
      };
    }
    return { props: { success: false, error: "Error de servidor" } };
  }
}

// Codigo previo con GSSP que funciona
// export async function getServerSideProps({ params }) {
//   console.log(params)
//   //la Url está compuesta por título - id
//   const splitUrl = params.id.split("-")
//   const id = splitUrl[splitUrl.length - 1]

//   try {
//     await dbConnect()

//     const block = await Block.findById(id).lean()
//     block._id = block._id.toString()

//     if (!block)
//       return {
//         props: {
//           success: false,
//           error: 'Bloque no encontrada!'
//         }
//       }

//     return {
//       props: {
//         success: true,
//         block
//       }
//     }

//   } catch (error) {
//     console.log(error)
//     if (error.kind === 'ObjectId') {
//       return { props: { success: false, error: 'Te has invetando la dirección' } }
//     }
//     return { props: { success: false, error: 'Error de servidor' } }
//   }
// }

// Esto funciona
// export async function getServerSideProps(context) {
//   console.log(2222, context.query)
//   try {
//     await dbConnect()
//     // Busco por router.query.title para evitar problemas en el caso de reload y acceder directamente a una URL
//     const block = await Block.findById(context.query.id).lean()

//     block._id = ` ${block._id}`
//     if (!block)
//       return { props: { success: false, error: 'Bloque no encontrada!' } }

//     return {
//       props: { success: true, block }
//     }

//   } catch (error) {
//     console.log(error)
//     if (error.kind === 'ObjectId') {
//       return { props: { success: false, error: 'Te has invetando la dirección' } }
//     }
//     return { props: { success: false, error: 'Error de servidor' } }
//   }
// }
