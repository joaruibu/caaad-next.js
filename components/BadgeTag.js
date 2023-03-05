import React, { useEffect, useState } from 'react'
import { allTags } from '../assets/tags'
import { useApp } from '../context'




const BadgeTag = ({ tag, icon }) => {
    const { tags, setTags, locale } = useApp()
    const [hasIcon, setHasIcon] = useState(true)

    useEffect(() => {
        setHasIcon(icon)

    }, [icon])
    // Todos los bloques tienen el tag de la categoría, que tiene la diferencia que es todo en mayúscula,
    // comprobamos que si todo el label esta escrito en mayúscula no lo mostramos en el apartado de filtros de la página de bloques
    // ya que es un tag que solamente lo usamos para filtrar, al actuar como un 'todos los bloques de esta categoría'
    if (allTags.filter(each => each.value === tag)[0].label === allTags.filter(each => each.value === tag)[0].label.toUpperCase())
        return

    return (
        <>
            <a className={`cursorHover inline-flex items-center rounded-full  whitespace-nowrap bg-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-white ${hasIcon ? "text-sm" : "text-xs"}`}
                href={!hasIcon ? `${locale === 'es' ? `/es/tag/${tag}` : `/tag/${tag}`}` : undefined}
            >


                {allTags.filter(each => each.value === tag)[0][locale === 'es' ? 'label_ES' : 'label']}
                {hasIcon &&
                    <button
                        type="button"
                        className="ml-1 cursorHover transition-all inline-flex h-4 w-4 items-center justify-center rounded-full text-white hover:bg-orange-200 hover:text-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none"
                        onClick={() => {
                            setTags(tags.filter((t) => t !== tag));
                        }}
                    >
                        <svg className="h-2 w-2 cursorHover" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"
                            />
                        </svg>
                    </button>
                }
            </a>
        </>
    )
}

export default BadgeTag

