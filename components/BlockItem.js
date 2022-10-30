import Image from "next/image"
import Link from "next/link"
import { createTitle } from "../helpers"
import BadgeFilter from "./BadgeFilter"
import BadgeTag from './BadgeTag'


const BlockItem = ({ block }) => {

    const { _id, category, date, description, downloads, dwg, filters, img, tags, title } = block


    return (



        <article key={_id} className="w-ful  border border-orange-600 shadow-none hover:shadow-xl">
            <Link href={`/blocks/${_id}`} passHref>
                <Image layout="responsive" width={250} height={165} alt={`Bloque de autocad ${title}`} src={img} priority />
            </Link>
            <div className="border-t border-orange-600 p-3">
                {/* <h3 className="mb-3 text-sm font-normal text-gray-600">{title}</h3> */}
                <div className="flex flex-wrap gap-1">

                    {filters.map((filter, index) => {
                        return <BadgeFilter
                            key={index}
                            filter={filter.label}
                            icon={false}

                        />

                    })
                    }

                    {tags.map((tag, index) => {
                        return <BadgeTag
                            key={index}
                            tag={tag.label}
                            icon={false}
                        />

                    })
                    }
                </div>
            </div>
        </article>


    )
}

export default BlockItem