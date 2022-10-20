import Image from "next/image"
import Link from "next/link"
import { createTitle } from "../helpers"

const BlockItem = ({ block }) => {
    console.log(block)

    const { _id, category, date, description, downloads, dwg, filters, img, tags, title } = block


    return (


        <Link href={`/blocks/${_id}`} passHref>
            <article className="w-full bg-white cursor-pointer border border-orange-600 shadow-none hover:shadow-xl">
                <Image layout="responsive" width={250} height={165} alt={`Bloque de autocad ${title}`} src={img} priority />
                <div className="border-t border-orange-600 p-3">
                    <h3 className="mb-3 text-sm font-normal text-gray-600">{title}</h3>
                    <div className="flex flex-wrap gap-1">
                        {filters.map(filtro => (
                            <a className=" p-1 rounded-md font-normal cursor-pointer whitespace-nowrap  bg-[#fcefe8] text-xs text-orange-600" key={filtro.id}>{filtro.label}</a>
                        ))}
                        |
                        {tags.map(tag => (
                            <a className=" p-1 rounded-md font-normal cursor-pointer whitespace-nowrap bg-[#fcefe8] text-xs text-orange-600" key={tag.id}>{tag.label}</a>
                        ))}
                    </div>
                </div>
            </article>
        </Link>

    )
}

export default BlockItem