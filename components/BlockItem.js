import Image from "next/image"
import Link from "next/link"
import React from "react"
import { createTitle } from "../helpers"
import BadgeFilter from "./BadgeFilter"
import BadgeTag from './BadgeTag'


const BlockItem = React.forwardRef(({ block }, ref) => {

    const { _id, categories, filters, img, tags, title } = block

    return (
        <article key={_id} className="w-full border border-orange-600  rounded-3xl overflow-hidden sm:hover:shadow-[5px_7px_0px_0px_rgb(234,88,12)] transition-all">
            <Link href={`/block/${_id}`} ref={ref} passHref>
                <Image className="cursor-pointer" layout="responsive" width={250} height={165} alt={`Descargar bloque de autocad ${title}`} src={img} priority />
            </Link>
            <div className="border-t border-orange-600">
                <Link href={`/block/${_id}`} ref={ref} passHref>
                    <h3 className="p-3 cursor-pointer underline text-sm  font-bold text-orange-600">{title}</h3>
                </Link>
                <div className="flex flex-wrap gap-1  p-3">
                    {filters.map((filter, index) => {
                        return <BadgeFilter
                            key={index}
                            filter={filter}
                            icon={false}
                        />
                    })
                    }
                    {
                        tags.filter(tag => !categories.includes(tag)).map((tag, index) => {
                            return <BadgeTag key={index} tag={tag} icon={false} />
                        })
                    }

                </div>
            </div>
        </article>


    )
})

export default BlockItem