import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='grid grid-cols-[160px_1fr_160px] gap-9 pt-4 pb-1 border-b border-b-orange-600 mb-12'>
            <h2 id="header-heading" className="sr-only">
                Header
            </h2>
            <Link href="/" passHref>
                <a>
                    <Image
                        className='cursor-pointer'
                        layout='responsive'
                        width={160} height={160}
                        src="/img/caaad-logo.gif"
                        alt='Logo caad descarga bloques de autocad gratis'
                        priority />
                </a>
            </Link>
        </header>
    )
}

export default Header
