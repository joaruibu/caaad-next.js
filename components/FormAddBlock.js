import React, { useState } from 'react'

import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { allCategories, allTags } from '../assets/categories'
import { allFilters } from '../assets/filters'
import { orderCategories } from '../helpers'

import ErrorMessage from './ErrorMessage'
import SuccessMessagge from './SuccessMessage'

const FormAddBlock = () => {

    const [form, setForm] = useState({
        title: '',
        description: '',
        categories: [],
        tags: [],
        filters: [],
        img: '',
        dwg: '',
        date: '',
        downloads: 0,
        free: true
    })

    const [checkedTags, setChekedTags] = useState([]);
    const [checkedFilters, setChekedFilters] = useState([])
    const [checkedCategories, setCheckedCategories] = useState([])
    const [file, setFileUpload] = useState('')

    const [isImgUpload, setIsImgUpload] = useState(false)
    const [isDwgUpload, setIsDwgUpload] = useState(false)
    const [isTypeError, setIsTypeError] = useState(false)

    const [isSuccessUpload, setIsSuccessUpload] = useState(false)
    const [isErrorUpload, setIsErrorUpload] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            date: Date.now(),
            downloads: 0,
            free: true
        })
    }

    const addOrRemoveCheck = (key, category) => {

        if (Object.keys(allFilters).includes(key)) {
            const selectedFilters = [...checkedFilters]

            if (!checkedFilters.includes(key)) {
                selectedFilters.push(key)
                setChekedFilters(selectedFilters)
                setForm({
                    ...form,
                    filters: selectedFilters,
                })
            } else {
                const filterFilters = selectedFilters.filter((f) => f !== key)
                setChekedFilters(filterFilters)
                setForm({
                    ...form,
                    filters: filterFilters,
                })
            }
        } else {
            const selectedTags = [...checkedTags]
            const selectedCategories = [...checkedCategories]

            if (!checkedTags.includes(key)) {

                selectedTags.push(key)
                if (!selectedCategories.includes(category)) {
                    selectedCategories.push(category)
                }

                setChekedTags(selectedTags)
                setCheckedCategories(selectedCategories)
                console.log(selectedCategories)
                setForm({
                    ...form,
                    tags: selectedTags,
                    categories: selectedCategories
                })
            } else {
                const filterTags = selectedTags.filter(t => t !== key)
                const filterCategories = selectedCategories.filter(f => f !== category)

                setChekedTags(filterTags)
                setCheckedCategories(filterCategories)

                setForm({
                    ...form,
                    tags: filterTags,
                    categories: filterCategories
                })
            }
        }
    }

    const obj = {
        image: {
            preset: 'acusc17i',
            type: 'image/png'
        },
        raw: {
            preset: 'tz7ic32j',
            ext: 'dwg'
        }
    }

    const uploadFile = async (type) => {
        if (file === '') return
        if (('ext' in obj[type] && file.name.split('.')[1] !== 'dwg') || ('type' in obj[type] && file.type !== obj[type].type)) {
            setIsTypeError(true)
            setTimeout(() => {
                setIsTypeError(false)
            }, 1500);
            return
        }
        setIsTypeError(false)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", obj[type].preset);

        const res = await fetch(`https://api.cloudinary.com/v1_1/dwsa2s0pn/${type}/upload`, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()

        if (data.secure_url !== '') {
            const key = type === "image" ? "img" : "dwg"
            setForm({
                ...form,
                [key]: data.secure_url,
            })
            if (type === 'image') setIsImgUpload(true);
            if (type === 'raw') setIsDwgUpload(true);

        }
    }


    const publishPinterestPost = async () => {
        console.log('bloquepublicado')
        let _datos = {
            "titulo": form.title,
            "description": form.description,
            "img": form.img,
            "url": `www.caaad.pro/bloque/`
        }

        await fetch('https://hooks.zapier.com/hooks/catch/13798738/bxpsfni/', {
            method: "POST",
            body: JSON.stringify(_datos),
            headers: { "Content-type": "application/json; charset=UTF-8" },
            mode: 'no-cors'
        })

    }

    const postData = async (form) => {
        try {
            const res = await fetch('/api/blocks', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = await res.json()

            data.success ? setIsSuccessUpload(true) : setIsErrorUpload(true)


        } catch (error) {
            console.log(4, error)
        }
    }
    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(form)
        publishPinterestPost()
        postData(form)

        setTimeout(() => {
            location.reload()
        }, 1000);

    }

    return (
        <>
            <h1 className='text-center font-extrabold tracking-tight text-3xl sm:text-6xl p-6 pb-12'>
                Nuevo Bloque
            </h1>
            <form onSubmit={(e) => handleSumbit(e)}>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <div className="mt-1">
                    <input
                        className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='Title'
                        autoComplete='off'
                        name='title'
                        value={form.title || ''}
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <div className="mt-1">
                    <textarea
                        className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='Description'
                        autoComplete='off'
                        name='description'
                        value={form.description || ''}
                        onChange={handleChange}
                    />

                </div>
                <fieldset>
                    <legend className="text-lg font-medium text-gray-900">Filters</legend>
                    <div className="mt-4 mb-6 divide-y divide-gray-200 border-t border-b border-gray-200 flex flex-wrap">
                        {Object.values(allFilters).map((filter, index) => {
                            return <div key={index} className="flex flex-wrap mb-6 pr-6">
                                <div className="min-w-0 text-sm">
                                    <label htmlFor={Object.keys(allFilters)[index]} className="select-none font-medium text-gray-700">
                                        {filter.label}
                                    </label>
                                </div>
                                <div className="ml-1 flex h-5 items-center">
                                    <input
                                        onClick={() => addOrRemoveCheck(Object.keys(allFilters)[index])}
                                        value={filter.value}
                                        name={Object.keys(allFilters)[index]}
                                        id={Object.keys(allFilters)[index]}
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                </div>
                            </div>
                        }
                        )}
                    </div>
                </fieldset>
                {orderCategories(allCategories)
                    .map((category) => (
                        <Disclosure key={category.value} className="border-t border-gray-200 px-4 py-6">
                            {({ open }) => (
                                <>
                                    <h3 className="-mx-2 -my-3 flow-root ">
                                        <Disclosure.Button className="px-2 py-2  w-full flex items-center justify-between text-gray-400">
                                            <span className="font-normal flex-1 text-left text-gray-400 whitespace-nowrap">{category.label}</span>
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
                                            {category.tags.map((tag, index) => (
                                                <div key={index} className="flex items-center">
                                                    <input
                                                        id={tag.value}
                                                        type="checkbox"
                                                        name={tag.value}
                                                        defaultValue={tag.label}
                                                        className="h-3 w-3 border-gray-300 rounded cursor-pointer"
                                                        onClick={() => addOrRemoveCheck(tag.value, category.value)}
                                                    />
                                                    <label
                                                        htmlFor={tag.value}
                                                        className="ml-2 min-w-0 flex-1 text-gray-500 text-xs cursor-pointer hover:text-gray-800"
                                                    >
                                                        {tag.label}
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





                {isTypeError && <ErrorMessage>Hay un error con tu formato de archivo</ErrorMessage>}
                <div className='flex justify-between items-center mb-3'>
                    <input className='flex-1' type="file" placeholder='Subir imagen' onChange={(e) => setFileUpload(e.target.files[0])} />
                    <a className={`border ${isImgUpload ? 'border-green-500 cursor-not-allowed' : ' border-orange-500 cursor-pointer'} rounded text-gray-600 p-3 `} onClick={() => uploadFile('image')}>{isImgUpload ? 'Imagen subida ✌️' : 'Subir imagen'}</a>
                </div>
                <div className='flex justify-between items-center'>
                    <input className='flex-1' type="file" placeholder='Subir dwg' onChange={(e) => setFileUpload(e.target.files[0])} />
                    <a className={`border ${isDwgUpload ? 'border-green-500 cursor-not-allowed' : ' border-orange-500 cursor-pointer'} rounded text-gray-600 p-3 `} onClick={() => uploadFile('raw')}>{isDwgUpload ? 'Dwg subido ✌️' : 'Subir dwg'}</a>
                </div>


                {isSuccessUpload && <SuccessMessagge >Bloque subido con éxito</SuccessMessagge>}
                {isErrorUpload && <ErrorMessage> Error, no se ha subido tu bloque</ErrorMessage>}
                <button className='w-full bg-gray-600 text-white p-3 mt-12' type='submit'>Agregar bloque</button>

            </form>
        </>


    )
}

export default FormAddBlock