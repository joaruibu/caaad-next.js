import React, { useEffect, useState } from 'react'
import { useApp } from '../context'



const BadgeTag = ({ tag, icon }) => {
    const { tags, setTags } = useApp()
    const [hasIcon, setHasIcon] = useState(true)

    useEffect(() => {
        setHasIcon(icon)

    }, [icon])


    return (
        <>
            <span className={`inline-flex items-center rounded-full bg-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-white ${hasIcon ? "text-sm" : "text-xs"}`}>
                {tag}
                {hasIcon &&
                    <button
                        type="button"
                        className="ml-1 transition-all inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-white hover:bg-orange-200 hover:text-orange-500 focus:bg-orange-500 focus:text-white focus:outline-none"
                        onClick={() => {
                            setTags(tags.filter((t) => t !== tag));
                        }}
                    >
                        <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7"
                            />
                        </svg>
                    </button>
                }
            </span>
        </>
    )
}

export default BadgeTag

