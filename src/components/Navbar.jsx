"use client"

import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "#",

    },
    {
        name: "Service",
        link: "#",

    },
    {
        name: "Contact",
        link: "#",

    }
]

function Navbar() {

    const [mobileNav, setMobileNav] = useState(false)
    const navRef = useRef(null)

    const handleMobileOpen = () => {
        setMobileNav(!mobileNav)
    }

    const rounter = useRouter()
    const path = usePathname()



  return (
    <nav className=' flex flex-row items-center justify-between z-50 bg-slate-50 w-full h-[50px] sticky top-0 shadow-2xl'>
        {/* IMAGELOGO_HERE */}
        <div className=' flex flex-row gap-2 items-center px-5'>
            <div className=' md:hidden' onClick={handleMobileOpen}>
                {
                    mobileNav ? 
                    (
                     <X size={25} className=' text-yellow-900' />
                    ) :
                    (
                     <MenuIcon size={30} className=' text-yellow-900' />
                    )
                }
            </div>
            <Link href="/" className=' flex items-center justify-center rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] bg-yellow-500 self-center'>
            <p className=' text-center text-white'>L</p>
           </Link>
        </div>

        {/* DESKTOP_MENU */}

      <ul className=' md:flex flex-row items-center gap-3 hidden shadow-2xl '>
        {navItems.map((item, idx) => (
            <li key={idx} >
                <Link 
                href={item.link}
                className={`${path === item.link ? "border border-yellow-600 px-3 py-1.5  text-yellow-800 duration-100 hover:border rounded-lg hover:border-yellow-600 active:shadow-lg text-2xl " : ""}px-3 text-lg py-1.5  text-yellow-800 duration-100 hover:border rounded-lg hover:border-yellow-600 active:shadow-lg `}
                >{item.name}</Link>
            </li>
        ))}
      </ul>
       
       {/* LOGIN_BUTTON */}
      <Link 
      href="/registration-form" 
      onClick={mobileNav && handleMobileOpen}
      className=' ring-1 ring-yellow-400 py-1.5 text-yellow-900 rounded-lg px-3 mr-5'
      >Login</Link>


      {/* MOBILEMENU */}
     { 
       mobileNav &&
        (    
            <ul ref={navRef} className={ ` ${mobileNav ? " transition-all  w-[50vw] duration-1000  shadow-2xl" : ""}  flex flex-col md:hidden transition-all   gap-3 top-[0px] absolute bg-slate-50 h-[100vh] px-3 py-7  duration-1000  `}>
            <X  
            onClick={mobileNav && handleMobileOpen}
            size={40}
            className=' absolute right-2 top-1 ring-1 ring-slate-100 p-2 rounded-md text-yellow-800'/>

            {navItems.map((item, idx) => (
                <li key={idx} >
                    <Link 
                    href={item.link}
                    onClick={handleMobileOpen}
                    className={`${path === item.link ? "border border-yellow-600 px-3 py-1.5  text-yellow-800 duration-100 hover:border rounded-lg hover:border-yellow-600 active:shadow-lg text-2xl " : ""}px-3 text-lg py-1.5 text-yellow-800 duration-100 hover:border rounded-lg hover:border-yellow-600 active:shadow-lg `}
                    >{item.name}</Link>
                </li>
            ))}
          </ul>
        )
      }

    </nav>
  )
}

export default Navbar