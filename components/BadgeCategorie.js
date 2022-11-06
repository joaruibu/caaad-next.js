import React, { useEffect, useState } from 'react'
import { useApp } from '../context'



const BadgeTag = ({ category }) => {


    return (
        <>
            <a className={`inline-flex items-center rounded-full  whitespace-nowrap bg-orange-600 py-0.5 pl-2.5 pr-2.5 font-medium text-white text-xs`}
                href={`category/${category}`}>

            </a>
        </>
    )
}

export default BadgeTag

