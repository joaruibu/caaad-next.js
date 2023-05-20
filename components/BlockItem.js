import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { createTitle, urlTitle } from "../helpers"
import BadgeFilter from "./BadgeFilter"
import BadgeTag from './BadgeTag'


const BlockItem = React.forwardRef(({ block, similarBlock }, ref) => {

    const [isSimilarBlock, setisSimilarBlock] = useState(false)
    useEffect(() => {
        setisSimilarBlock(similarBlock)
    }, [similarBlock])

    const { locale } = useRouter()
    const { _id, categories, filters, img, tags, title, title_ES } = block


    return (
        <article key={_id} className={` ${isSimilarBlock ? ' w-56 flex-none' : ' w-full '} border border-orange-600  rounded-3xl overflow-hidden sm:hover:shadow-[5px_7px_0px_0px_rgb(234,88,12)] transition-all `}>
            <Link className="cursorHover cursor-pointer" href={`/download-autocad-block/${urlTitle(locale === 'es' ? title_ES : title)}-${_id}`} ref={ref} passHref>
                <Image className="cursorHover cursor-pointer" layout="responsive" width={250} height={165} alt={locale === 'es' ? `Descargar bloque gratis de autocad de ${title_ES}. Bloque de cad hecho por Be Interior Designer para descargar gratuita de bloques.` : `Dowload free ${title} autocad block. Autocad block make by Be Interior Designer for block free download`} src={img} loading="lazy" />
            </Link>
            <div className="border-t border-orange-600">
                <Link href={`/download-autocad-block/${urlTitle(locale === 'es' ? title_ES : title)}-${_id}`} ref={ref} passHref>
                    <h3 className="p-3 cursorHover cursor-pointer underline text-sm  font-bold text-orange-600">{locale === 'es' ? title_ES : title}</h3>
                </Link>
                <div className="flex flex-wrap gap-1 p-3">
                    {
                        <>
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
                                    return <BadgeTag
                                        key={index}
                                        tag={tag}
                                        icon={false}
                                    />
                                })
                            }
                        </>
                    }

                </div>
            </div>
        </article>

    )
})

export default BlockItem