import React from 'react'
import { useApp } from '../context'

const SearchBar = () => {
    const { tags, query, setQuery, setSearch, setTags } = useApp()
    console.log(tags)
    return (
        <>
            <form className='relative'
                onSubmit={(e) => { e.preventDefault(); setSearch(query) }}>

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
            <div className='flex gap-2 mt-4'>
                {tags.map((tag, index) =>
                    <div
                        key={index}
                        className='bg-gray-200 px-2 py-1 text-xs font-extralight rounded-md'
                        onClick={() => {
                            setTags(tags.filter((t) => t !== tag));

                        }}>{tag}

                    </div>

                )}
            </div>

        </>
    )
}

export default SearchBar
