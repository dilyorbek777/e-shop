import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/media/shop.png'

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={logo} width={0} height={0} className='w-24' alt='E-shop developer logo dev shop vercel' />
                    <span className="ml-3 text-xl">DevShop</span>
                </Link>


                <Link href={'/cart'}>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">My Cart
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </header>
    )
}
