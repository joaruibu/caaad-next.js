import { useRouter } from 'next/router'
import React from 'react'
import { useApp } from '../context'
import BadgeTag from './BadgeTag'

const SearchBar = () => {
    const { tags, setFilters, setTags, query, setQuery, setSearch, locale } = useApp()
    const router = useRouter();
    return (
        <>
            <form className='relative mb-9 sm:mb-0'
                onSubmit={(e) => {
                    e.preventDefault();
                    setSearch(query);
                    setTags([]);
                    setFilters([])
                }}>

                <input
                    type="search"
                    id="search"
                    name="search"
                    value={query}
                    className="block w-full bg-inherit border border-orange-600 rounded-full p-3 pl-10 text-sm  placeholder-gray-400 
                    focus:outline-none focus:text-gray-900 focus:placeholder-gray-600 focus:ring-1 focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
                    placeholder={locale === 'es' ? 'Busca tu bloque de autocad' : 'Search autocad blocks'}
                    onChange={(e) => setQuery(e.target.value)}>

                </input>
                <input
                    type="submit" className="hidden"></input>

                <i type="submit" className="fa-solid fa-magnifying-glass text-orange-600 absolute top-1 right-3 p-3 cursor-pointer"></i>

            </form>

            <div className='hidden sm:block mt-4 min-h-[60px]'>
                <div className='flex flex-wrap gap-2 mb-1 '>
                    {router.route === '/' &&
                        (tags.map((tag, index) => {
                            return <BadgeTag
                                key={index}
                                tag={tag}
                                icon={true}
                            />
                        }))
                    }
                </div>
                {tags.length > 0 && <a
                    className='cursor-pointer text-xs w-fit text-gray-500 hover:underline'
                    onClick={() => setTags([])}
                >{locale === 'es' ? 'Borrar todos los Tags' : ' Delete all Tags'}
                </a>}
            </div>


        </>
    )
}

export default SearchBar
