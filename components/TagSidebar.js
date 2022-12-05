

import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

import { allFilters } from '../assets/filters'
import { allTags } from '../assets/tags'
import { allCategories } from '../assets/categories'
import { orderCategories } from '../helpers'
import { useApp } from '../context'



const TagSidebar = () => {

    const { tags, setTags, filters, setFilters, setSearch, setQuery, locale } = useApp()

    return (
        <>
            <h2 className='font-bold border-b border-b-black mb-3'>{locale === 'es' ? 'Filtros' : 'Filters'}</h2>
            <div className="grid grid-cols-2 mb-6">
                {allFilters.map((filter) => (
                    <div key={filter.value} className="flex items-center m-1 mr-3">
                        <input
                            id={`filter-${filter.value}`}
                            defaultValue={filter.value}
                            type="checkbox"
                            className="h-3 w-3 rounded"
                            checked={filters.includes(filter.value)}
                            onChange={() => {
                                if (!filters.includes(filter.value)) {
                                    setFilters([...filters, filter.value]);
                                } else {
                                    setFilters(filters.filter((t) => t !== filter.value));
                                }
                            }}

                        />
                        <label
                            htmlFor={`filter-${filter.value}`}
                            className="ml-1 min-w-0 flex-1 text-gray-500  hover:text-gray-800 text-xs cursor-pointer"
                        >
                            {locale === 'es' ? filter.label_ES : filter.label}
                        </label>
                    </div>
                ))}
            </div>


            <h2 className='font-bold border-b border-b-black mb-3'>{locale === 'es' ? 'Categoría' : 'Categories'} </h2>
            {orderCategories(allCategories)
                .map((category) => (
                    <Disclosure key={category.value} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                            <>
                                <h3 className="-mx-2 -my-3 flow-root ">
                                    <Disclosure.Button className="px-2 py-2  w-full flex items-center justify-between text-gray-400">
                                        <span className="font-normal flex-1 text-left text-gray-400 whitespace-nowrap">{locale === 'es' ? category.label_ES : category.label}</span>
                                        <span className="flex items-center text-orange-600  hover:rotate-45 duration-75">
                                            {open ? (
                                                <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                            ) : (
                                                <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                            )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-3 pl-2 pb-6">
                                    <div className="space-y-2">
                                        {allTags.
                                            filter(each => category.tags.includes(each.value))
                                            .map(((tag, optionIdx) => (
                                                <div key={optionIdx} className="flex items-center">
                                                    <input
                                                        id={`filter-${category.value}-${optionIdx}`}
                                                        type="checkbox"
                                                        defaultValue={tag.value}
                                                        checked={tags.includes(tag.value)}
                                                        className="h-3 w-3 border-gray-300 rounded cursor-pointer"
                                                        onChange={() => {
                                                            setSearch('')
                                                            setQuery('')
                                                            if (!tags.includes(tag.value)) {
                                                                setTags([...tags, tag.value]);
                                                                //JAVIER - 
                                                                //1. si hago click en el primer elemento del array de tags de cada categoría quiero añadir a tags
                                                                //todos los tags.label que contiene esa categoria.

                                                                //2. Estando selecionado el priemr elemento del array, y clicko en otro tag de ese mismo array, 
                                                                //se deseleciona el primer elemento del array

                                                                // if (tag.label === category.tags[0].label) {
                                                                //     category.tags.map(tag => setTags([...tags, tag.label]) )
                                                                // }
                                                            } else {

                                                                // 3. Si deselecciono el primer elemento del array, se deselecciona todos los tags de esa categria
                                                                setTags(tags.filter((t) => t !== tag.value));
                                                            }
                                                        }}
                                                    />
                                                    <label
                                                        htmlFor={`filter-${category.value}-${optionIdx}`}
                                                        className="ml-2 min-w-0 flex-1 text-gray-500 text-xs cursor-pointer hover:text-gray-800"
                                                    >
                                                        {locale === 'es' ? tag.label_ES : tag.label}
                                                    </label>
                                                </div>
                                            )))}

                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))
            }

        </>

    )
}

export default TagSidebar
