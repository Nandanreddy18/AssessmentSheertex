import React from 'react'
import Link from 'next/link';

export default function Navbar(){
    return (
        <div>
        <div className="bg-gray-400 text-center w-screen ">
            
                FLASH SALE:15% OFF EVERYTHING + FREE SHIPPING
            
        </div>
        <div className=" bg-white-700 mr-20 text-black flex md:flex justify-between md:justify-between">
            <div className="flex items-center justify-start md:flex md:justify-start">
                <div className="py-4  ml-8"><Link href='/'>Tights</Link></div>
                <div className="py-4  ml-8"><Link href='/'>Stockings</Link></div>
                <div className="py-4 ml-8"><Link href='/'>Socks and accessories</Link></div>
            </div>
            <div className="text-xl py-4"><Link href='/'>SHEERTEX</Link></div>
            <div className="flex items-center justify-between md:flex md:justify-between">
            <div className="mr-4 py-4 px-2"><Link href='/'>Our Knit</Link></div>
            <div className="mr-4 py-4 px-2"><Link href='/'>Our Story</Link></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" className="mr-4 ml-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " className="mr-4 ml-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" className="mr-4 ml-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            </div>
        </div>
        </div>
    )
}
