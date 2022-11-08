import React, { useEffect, useState } from 'react'
import { allFilters } from '../assets/filters'
import { useApp } from '../context'


const BadgeFilter = ({ filter, icon }) => {
    const { filters, setFilters } = useApp()
    const [hasIcon, setHasIcon] = useState(true)

    useEffect(() => {
        setHasIcon(icon)
    }, [icon])

    return (
        <>

            <a className={`inline-flex items-center rounded-full whitespace-nowrap border border-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-orange-600 ${hasIcon ? "text-sm" : "text-xs"}`}
                href={!hasIcon ? `/filter/${filter}` : undefined}>
                {allFilters[filter].label}
                {hasIcon &&
                    <button
                        type="button"
                        className="ml-1 transition-all inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-orange-600 hover:bg-orange-200 hover:text-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none"
                        onClick={() => {
                            setFilters(filters.filter((f) => f !== filter));
                        }}
                    >
                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"
                            />
                        </svg>
                    </button>
                }
            </a>
        </>
    )
}

export default BadgeFilter

