import { useRouter } from 'next/router'
import React from 'react'
import { useApp } from '../context'
import BadgeTag from './BadgeTag'
import BadgeFilter from './BadgeFilter'

const SearchBar = () => {
    const { tags, filters, setFilters, setTags, query, setQuery, setSearch } = useApp()
    const router = useRouter();
    return (
        <>
            <form className='relative'
                onSubmit={(e) => { e.preventDefault(); setSearch(query); setTags([]); setFilters([]) }}>

                <input
                    type="search"
                    id="search"
                    name="search"
                    value={query}
                    className="block w-full bg-inherit border border-orange-600 rounded-full p-3 pl-10 text-sm  placeholder-gray-400 
                    focus:outline-none focus:text-gray-900 focus:placeholder-gray-600 focus:ring-1 focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
                    placeholder="Search autocad blocks"
                    onChange={(e) => setQuery(e.target.value)}>

                </input>
                <input
                    type="submit" className="hidden"></input>

                <i type="submit" className="fa-solid fa-magnifying-glass text-orange-600 absolute top-1 right-3 p-3 cursor-pointer"></i>

            </form>
            <div className='flex gap-6'>
                <div className='inline-flex  w-1/2 flex-col mt-4 overflow-hidden overflow-x-auto'>
                    <div className=' h-6 mr-6 w-fit inline-flex gap-2 mb-3'>
                        {router.route === '/' &&
                            (filters.map((filter, index) => {
                                return <BadgeFilter
                                    key={index}
                                    filter={filter}
                                    icon={true}
                                />
                            }))
                        }
                    </div>
                    {filters.length > 2 && <a
                        className='cursor-pointer text-xs block w-full text-gray-500 hover:underline'
                        onClick={() => setFilters([])}
                    >Delete all filters</a>}
                </div>
                <div className='inline-flex w-1/2  flex-col mt-4 '>
                    <div className='h-6  inline-flex gap-2 mb-3 scrollbar-hide overflow-hidden overflow-x-auto'>
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
                    {tags.length > 2 && <a
                        className='cursor-pointer text-xs block w-full text-gray-500 hover:underline'
                        onClick={() => setTags([])}
                    >Delete all Tags</a>}
                </div>

            </div>


        </>
    )
}

export default SearchBar
