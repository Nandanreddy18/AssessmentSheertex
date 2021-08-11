import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'

export default function Layout({children}){
    return (
        <div>
            
            <Navbar className="z-1 bg-white"/>
            {children}
            <Footer className="w-5/6 m-auto"/>
        </div>
    )
}

