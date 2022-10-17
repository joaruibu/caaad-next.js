import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <h3 className='relative w-full rounded-lg text-center p-3 mt-6 bg-red-500 text-white'>{children}</h3>
    )
}

export default ErrorMessage