import React from 'react'

const SearchBar = () => {
    return (
        <>

            <form className='relative'>
                <input
                    type="search"
                    id="search"
                    name="search"
                    className="block w-full bg-inherit border border-orange-600 rounded-full p-3 pl-10 text-sm  placeholder-gray-400 
                    focus:outline-none focus:text-gray-900 focus:placeholder-gray-600 focus:ring-1 focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
                    placeholder="Search autocad blocks">
                </input>
                <input type="submit" className="hidden"></input>

                <i type="submit" className="fa-solid fa-magnifying-glass text-orange-600 absolute top-1 right-3 p-3 cursor-pointer"></i>

            </form>

        </>
    )
}

export default SearchBar
