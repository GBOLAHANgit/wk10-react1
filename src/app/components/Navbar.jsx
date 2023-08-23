import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul className=" flex justify-between  items-center bg-orange-300 text-white h-[20px]">
            
            <Link  href='/'>
            <li>Home</li>
            </Link>

            <Link href='/course'>
            <li>course</li>
            </Link>

            <Link href='/about'>
            <li>about</li>
            </Link>

            <Link href='/contact'>
            <li>Contact</li>
            </Link>
        </ul>

      
    </div>
  )
}

 