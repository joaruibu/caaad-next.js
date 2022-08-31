import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
    const router = useRouter();
    return (
        <header className='grid grid-cols-[160px_1fr_160px] gap-9 pt-6 pb-2 border-b border-b-orange-600'>

            <Link href="/">
                <Image className='cursor-pointer' layout='responsive' width={134} height={69} src="/img/logo-caaad-autocad.svg" alt='Logo caad descarga bloques de autocad gratis' />
            </Link>


            <div className='flex-1 pt-3'>
                {router.route !== '/' &&

                    <SearchBar />
                }

            </div>

        </header>
    )
}

export default Header
