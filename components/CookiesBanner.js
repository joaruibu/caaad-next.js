import React from 'react'
import { useApp } from '../context'

const CookiesBanner = () => {
    const { setCookiesAccepted } = useApp()

    return (
        <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-orange-600 p-2 shadow-lg sm:p-3">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex w-0 flex-1 items-center">
                            <span className="flex rounded-lg p-2">
                                🍪
                            </span>
                            <p className="ml-3  font-normal text-white">
                                <span className="md:hidden">Cooookies, estamos a dieta, comemos las justas.</span>
                                <span className="hidden md:inline">Cooookies, estamos a dieta, y solo usamos las justas para saber cuanta gente nos visita :)</span>

                            </p>
                        </div>
                        <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href="#"
                                className=" text-white text-sm hover:underline opacity-50 pr-9"
                                onClick={() => setCookiesAccepted(true)}
                            >
                                No, me apetece
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2 ">

                            <a
                                href="#"
                                className="flex items-center justify-center rounded-md  bg-white px-6 py-2 text-sm font-medium text-orange-600 shadow-sm hover:bg-indigo-50"
                                onClick={(e) => { e.preventDefault(); setCookiesAccepted(true) }}
                            >
                                OKEY
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default CookiesBanner

