import React from 'react'
import 'react-icons'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () =>{
return (
    <div className='bg-blue-500 px-4 md:px-16 lg:px-28'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>
            WorldTravel	&trade;
        </h2>
        <p className='text-white'>
            We hope Your Journey with us has admired you , and are proud becouse you choose us .
        </p>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>
            Quickly Come Back 
        </h2>
        <ul>
            <li><a href='' className='text-white hover:text-3xl' >Home</a></li>
            <li><a href="" className='text-white hover:text-3xl'>Packages</a></li>
            <li><a href="" className='text-white hover:text-3xl'>Destination</a></li>
            <li><a href="" className='text-white hover:text-3xl'>Blog</a></li>
        </ul>
        </div>
        <div>
        <h2 className='text-lg font-bold mb-4 text-white'>Follow us</h2>
        <ul className='flex space-x-4'>
            <li><FaFacebook className='text-blue-900'/> 
            <a href='' className='text-white hover:text-3xl' ></a></li>
            <li>
                <FaX />
                <a href='' className='text-white hover:text-2xl' ></a></li>
            <li>
                <FaInstagram />
                <a href='' className='text-white hover:text-2xl' ></a></li>
            <li>
                <FaSnapchat />
                <a href='' className='text-white hover:text-2xl' ></a></li>
        </ul>
        </div>
    </div>
        <div className='border-t border-t-amber-50'>
            <p className='text-amber-50 mb-0 text-2xl text-center'>© 2025 Code with AmrAssal. All Right Resorved</p>
        </div>
    </div>
    )   
}

export default Footer