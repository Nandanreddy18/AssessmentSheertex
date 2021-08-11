import React from 'react'
import Link from 'next/link';


export default function Footer(){
    return (
        <div>
             <div className="py-20 flex grid grid-cols-5 md:grid md:grid-cols-5 md:flex ml-20">
        <div className="bg-yellow-400">
           <div>
               <h1>Get 15% - Join Our Mailing List</h1>
           </div>
           <div>
               <h1>Be The first to get the updates on special offers.Product launchers and insider exclusives</h1>
           </div>
           <div>
               <input type="email" size="30" placeholder="Your Mail"/>
               <button>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>  
               </button>
           </div>
           
        </div>
        <div className="ml-10">
            <div>
                <Link href='/'> About </Link>
            </div>
            <div>
                <Link href='/'> Our Story </Link>
            </div>
            <div>
                <Link href='/'> Our Knit </Link>
            </div>
            <div>
                <Link href='/'> Reviews </Link>
            </div>
            <div>
                <Link href='/'> FAQ </Link>
            </div>
            <div>
                <Link href='/'> Reviews </Link>
            </div>
        </div>
        <div>
            <div >
                <Link href='/'> Shop </Link>
            </div>
            <div>
                <Link href='/'> Home </Link>
            </div>
            <div>
                <Link href='/'> Shop All </Link>
            </div>
            <div>
                <Link href='/'> Gift Card </Link>
            </div>
            <div>
                <Link href='/'> Refer a friend </Link>
            </div>
        </div>
        <div>
            <div>
                <Link href='/'> Contact </Link>
            </div>
            <div>
                <p>7471 Avenue Leonard di vinci Montreal, Qc H2A 2P3</p>
            </div>
            <div>
                <p>1800-715-1658</p>
            </div>
            <div>
                <p>hello@sheertex.com</p>
            </div>
        </div>
        <div className="mr-10 py-10 ml-10 flex flex-col md:flex md:flex-col items-center">
        <div className="mr-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </div>
            <div>
            <h4>Sustainably made in Montreal, Canada</h4>
            </div>
        </div>
       
          </div>
        
        </div>
       
    )
}

