import React from 'react'
import 'react-icons'
import BrandLogo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () =>{
return (
    <div className='bg-blue-500 px-4 md:px-16 lg:px-28'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
            <img src={BrandLogo} alt='worldTravel Logo'/> 
        <p className='text-white'>
            We hope Your Journey with us has admired you , and are proud becouse you choose us .
        </p>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>
            Quickly Come Back 
        </h2>
        <ul>
            <li><Link href="/" className='text-white hover:text-3xl' >Home</Link></li>
            <li><Link href="/Packages" className='text-white hover:text-3xl'>Packages</Link></li>
            <li><Link href="/Destination" className='text-white hover:text-3xl'>Destination</Link></li>
            <li><Link href="/Blog" className='text-white hover:text-3xl'>Blog</Link></li>
        </ul>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>Follow us</h2>
        <ul className='flex space-x-4'>
            <li> 
            <a href='' className='text-white hover:text-3xl' ><FaFacebook className='text-blue-900'/></a></li>
            <li>
                
                <a href='' className='text-white hover:text-2xl' ><FaX className='text-black'/></a></li>
            <li><a href='' className='text-white hover:text-2xl' > <FaInstagram className='text-red-600'/></a></li>
            <li>
                
                <a href='' className='text-white hover:text-2xl' ><FaSnapchat className='text-yellow-300'/></a></li>
        </ul>
        </div>
    </div>
        <div className='border-t border-t-amber-50'>
            <p className='text-amber-50 mb-0 text-2xl text-center'>&copy; 2025 Code with AmrAssal. All Right Reserved</p>
        </div>
    </div>
    )   
}

export default Footer