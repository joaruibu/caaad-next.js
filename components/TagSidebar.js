

import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { categories } from '../assets/categories'
import { filters } from '../assets/filters'
import { orderCategories } from '../helpers'


const TagSidebar = () => {

    return (
        <>
            <h2 className='font-bold border-b border-b-black mb-3'>Filtros</h2>
            <div className="grid grid-cols-2 mb-6">
                {filters.map((option) => (
                    <div key={option.value} className="flex items-center m-1 mr-3">
                        <input
                            id={`filter-${option.value}`}
                            defaultValue={option.value}
                            type="checkbox"
                            defaultChecked={option.checked}
                            className="h-3 w-3 rounded"
                        />
                        <label
                            htmlFor={`filter-${option.value}`}
                            className="ml-1 min-w-0 flex-1 text-gray-500  hover:text-gray-800 text-xs cursor-pointer"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>



            <h2 className='font-bold border-b border-b-black mb-3'>Categoría</h2>
            {orderCategories(categories).map((section) => (
                <Disclosure key={section.id} className="border-t border-gray-200 px-4 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-mx-2 -my-3 flow-root ">
                                <Disclosure.Button className="px-2 py-2  w-full flex items-center justify-between text-gray-400">
                                    <span className="font-normal flex-1 text-left text-gray-400 whitespace-nowrap">{section.name}</span>
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
                                    {section.tags.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-3 w-3 border-gray-300 rounded cursor-pointer"
                                            />
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-2 min-w-0 flex-1 text-gray-500 text-xs cursor-pointer hover:text-gray-800"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
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
