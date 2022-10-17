import React from 'react'

const SuccessMessagge = ({ children }) => {
    return (
        <h3 className='relative w-full rounded-lg text-center p-3 mt-6 bg-green-500 text-white'>{children}</h3>
    )
}

export default SuccessMessagge