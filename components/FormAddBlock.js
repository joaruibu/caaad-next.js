import React, { useEffect, useState } from 'react'

import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PhoneIncomingIcon, PlusSmIcon } from '@heroicons/react/solid'
import { allCategories } from '../assets/categories'
import { allFilters } from '../assets/filters'
import { allTags } from '../assets/tags'
import { orderCategories, urlTitle } from '../helpers'

import ErrorMessage from './ErrorMessage'
import SuccessMessagge from './SuccessMessage'

const FormAddBlock = () => {

    const [form, setForm] = useState({
        title: '',
        title_ES: '',
        description: '',
        description_ES: '',
        similar: '',
        categories: [],
        tags: [],
        filters: [],
        img: '',
        dwg: '',
        date: '',
        downloads: 0,
        free: true,
        price: 0,
        urlStripe: '',
        codePremiumBlock: '',
        videos: []
    })

    const [checkedTags, setChekedTags] = useState([]);
    const [checkedFilters, setChekedFilters] = useState([])
    const [checkedCategories, setCheckedCategories] = useState([])
    const [file, setFileUpload] = useState('')
    const [price, setPrice] = useState(0)
    const [videos, setVideos] = useState([])

    const [isImgUpload, setIsImgUpload] = useState(false)
    const [isDwgUpload, setIsDwgUpload] = useState(false)
    const [isTypeError, setIsTypeError] = useState(false)
    const [isFree, setIsFree] = useState(true)


    const [isSuccessUpload, setIsSuccessUpload] = useState(false)
    const [isErrorUpload, setIsErrorUpload] = useState(false)
    const [urlId, setUrlId] = useState('')
    const [totalImgGallery, setTotalImgGallery] = useState(0)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            date: Date.now(),
            downloads: 0,

        })
    }

    const addOrRemoveCheck = (value, category) => {
        //Estamos clikando un filtro
        if (allFilters.some(filter => filter.value === value)) {

            const selectedFilters = [...checkedFilters]

            if (!checkedFilters.includes(value)) {
                selectedFilters.push(value)
                setChekedFilters(selectedFilters)
                setForm({
                    ...form,
                    filters: selectedFilters,
                })

            } else {
                const filterFilters = selectedFilters.filter((each) => each !== value)
                setChekedFilters(filterFilters)
                setForm({
                    ...form,
                    filters: filterFilters,
                })
            }

        } else {
            //Estamos clikando un tag
            const selectedTags = [...checkedTags]
            const selectedCategories = [...checkedCategories]

            if (!checkedTags.includes(value)) {
                selectedTags.push(value)
                if (!selectedCategories.includes(category)) {
                    // Filtro las  categorias que tengan ese tag en cat.tags, lo mapeo e inserto el valor
                    allCategories
                        .filter(cat => cat.tags.includes(value))
                        .map(cat => selectedCategories.push(cat.value))
                }

                setChekedTags(selectedTags)
                setCheckedCategories(selectedCategories)

                setForm({
                    ...form,
                    tags: selectedTags,
                    categories: selectedCategories
                })
            } else {
                const filterTags = selectedTags.filter(t => t !== value)
                const filterCategories = selectedCategories.filter(each => each !== category)
                alert('Esto va a dar error, vuelve a subir el bloque. :)')

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
        mp4: {
            preset: 'grll9neo',
            type: 'video/mp4'
        },
        raw: {
            preset: 'tz7ic32j',
            ext: 'dwg'
        }
    }

    const uploadFile = async (type) => {
        if (file === '') return
        console.log(file)
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

        const res = await fetch(`https://api.cloudinary.com/v1_1/dwsa2s0pn/${type === 'mp4' ? 'video' : type}/upload`, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()

        const typeFile = {
            image: 'img',
            raw: 'dwg',
            mp4: 'videos'
        }

        if (data.secure_url !== '') {


            const key = typeFile[type]

            const value = () => {
                if (type !== 'mp4') {
                    return data.secure_url
                } else {
                    videos.push({ value: data.secure_url, isUpload: true })
                    return videos
                }
            }

            setForm({
                ...form,
                [key]: value(),
            })

            if (type === 'image') setIsImgUpload(true);
            setTimeout(() => {
                setIsImgUpload(false)
            }, 500);
            if (type === 'raw') setIsDwgUpload(true);

        }
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
            setUrlId(data.block._id)

            // Con data.block._id tengo el parametro para construir la url en el post de zapier title + id
            data.success ? setIsSuccessUpload(true) : setIsErrorUpload(true)


        } catch (error) {
            console.log(4, error)
        }
    }


    const publishPinterestPost = async () => {

        let _datos = {
            "titulo": form.title,
            "description": form.description,
            "img": form.img,
            "url": `www.caaad.pro/download-autocad-block/${urlTitle(form.title)}-${urlId}`
        }

        await fetch('https://hooks.zapier.com/hooks/catch/13798738/bxpsfni/', {
            method: "POST",
            body: JSON.stringify(_datos),
            headers: { "Content-type": "application/json; charset=UTF-8" },
            mode: 'no-cors'
        })

    }
    //Publico el post de pinterest cuanto tengo el valor del id que me viene de la respuesta del postData (esto se debe de poder mejorar con async/await)
    //Descomentar cuando volvamos a activar zapier
    // useEffect(() => {
    //     if (urlId !== '') {
    //         publishPinterestPost()
    //     }

    // }, [urlId])



    useEffect(() => {

        setForm({
            ...form,
            free: isFree

        })

    }, [isFree]);



    const handleSumbit = (e) => {
        e.preventDefault()

        console.log(444444, form)

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
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">English title</label>
                <div className="mt-1">
                    <input
                        className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='English title'
                        autoComplete='off'
                        name='title'
                        value={form.title || ''}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Spanish title</label>
                <div className="mt-1">
                    <input
                        className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='Título en Español'
                        autoComplete='off'
                        name='title_ES'
                        value={form.title_ES || ''}
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="description" className="block text-sm font-medium text-gray-700">English description</label>
                <div className="mt-1">
                    <textarea
                        className="block w-full h-96 p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='English description'
                        autoComplete='off'
                        name='description'
                        value={form.description || ''}
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Spanish description</label>
                <div className="mt-1">
                    <textarea
                        className="block w-full h-96 p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='Descripción en Español'
                        autoComplete='off'
                        name='description_ES'
                        value={form.description_ES || ''}
                        onChange={handleChange}
                    />
                </div>



                <label htmlFor="Similar" className="block text-sm font-medium text-gray-700">Similar:</label>
                <div className="mt-1">
                    <input
                        className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        type='text'
                        placeholder='Similar'
                        autoComplete='off'
                        name='similar'
                        value={form.similar || ''}
                        onChange={handleChange}
                    />
                </div>
                <h2 className='font-bold border-b border-b-black mb-3'>Bloques premium</h2>
                {form.free}
                <div className='mb-6'>
                    <div className="flex items-center mb-6">

                        <button type="button" onClick={() => setIsFree(!isFree)} className={` ${isFree ? ' bg-gray-200 ' : ' bg-orange-500 '}  relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out `}
                            role="switch" aria-checked="true" >
                            <span aria-hidden="true" className={`${isFree ? 'translate-x-0' : 'translate-x-5'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`} ></span>
                        </button>
                        <span className="ml-3 text-sm" id="annual-billing-label">
                            <span className="font-medium text-gray-900">Premium Block</span>
                        </span>
                    </div>
                    {!isFree &&
                        <>
                            <label htmlFor="urlStripe" className="block text-sm font-medium text-gray-700">Url Stripe:</label>
                            <input
                                className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                type='text'
                                placeholder='Stripe url'
                                autoComplete='off'
                                name='urlStripe'
                                value={form.urlStripe || ''}
                                onChange={handleChange}
                            />

                            <label htmlFor="codePremiumBlock" className="block text-sm font-medium text-gray-700">Code Premium block:</label>
                            <input
                                className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                type='text'
                                placeholder='Code Premium block:'
                                autoComplete='off'
                                name='codePremiumBlock'
                                value={form.codePremiumBlock || ''}
                                onChange={handleChange}
                            />

                            <label htmlFor="Price" className="block text-sm font-medium text-gray-700">Price:</label>
                            <input
                                className="block w-full p-3 mb-6 bg-inherit rounded-md border border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                type='number'
                                placeholder='Price'
                                autoComplete='off'
                                name='price'
                                value={form.price || ''}
                                onChange={handleChange}
                            />

                            {isTypeError && <ErrorMessage>Hay un error con tu formato de archivo</ErrorMessage>}
                            <label className="block text-sm font-medium text-gray-700">Imágenes bundle:</label>

                            {Array.from(Array(totalImgGallery), (e, i) => {
                                return <div key={i} className='flex justify-between items-center mb-3'>
                                    <input className='flex-1' type="file" placeholder='Subir imagen' onChange={(e) => setFileUpload(e.target.files[0])} />
                                    <a className={`border ${isImgUpload ? 'border-green-500 cursor-not-allowed' : ' border-orange-500 cursor-pointer'} rounded text-gray-600 p-3 `} onClick={() => uploadFile('mp4')}>{videos[i]?.isUpload ? 'Video subido ✌️' : 'Subir mp4'}</a>
                                </div>
                            })}
                            <a className={`border  border-orange-500 cursor-pointer rounded text-gray-900 p-3  w-full block text-center`} onClick={() => setTotalImgGallery(totalImgGallery + 1)}>Añadir video</a>

                        </>

                    }

                </div>

                <h2 className='font-bold border-b border-b-black mb-3'>Filtros</h2>
                <div className="mt-4 mb-6 divide-y divide-gray-200 border-t border-b border-gray-200 flex flex-wrap">

                    {allFilters.map((filter, index) => {
                        return <div key={index} className="flex flex-wrap mb-6 pr-6">
                            <div className="min-w-0 text-sm">
                                <label htmlFor={`filter-${filter.value}`} className="select-none font-medium text-gray-700">
                                    {filter.label}
                                </label>
                            </div>
                            <div className="ml-1 flex h-5 items-center">
                                <input
                                    onClick={() => addOrRemoveCheck(filter.value)}
                                    value={filter.value}
                                    name={`filter-${filter.value}`}
                                    id={`filter-${filter.value}`}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    }
                    )}
                </div>

                <h2 className='font-bold border-b border-b-black mb-3'>Categories</h2>

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
                                            {allTags.
                                                filter(each => category.tags.includes(each.value))
                                                .map(((tag, optionIdx) => (
                                                    <div key={optionIdx} className="flex items-center">
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
                                                )))}
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