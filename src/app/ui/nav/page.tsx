
'use client'
import Link from "next/link";
import { FaTimes,FaBars } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import logo from '../../../../public/images/logo/exactlogo.png'

const Nav=()=>{

    const [nav, setNav] = useState(false);

    const handleNave=()=>{

         setNav(!nav);
    }


    return (

        <div>
          
              <div className="bg-slate-900 flex w-full h-24  fixed nav  text-white uppercase sm:flex justify-end">
                  
                 <div className="md:pt-6 md:hidden flex">

                  <Image src={logo} alt="Logo" className="h-12 w-40 
                  "/>

                </div>
            
                 <div className="hidden h-full w-full md:flex md:flex-row items-center md:justify-center">
                 <ul  >
                        <Link href="/" className="p-x-5"> Home </Link>
                        <Link href="/about" className="px-5"> About </Link>
                        <Link href="/project" className="px-5"> Project </Link>
                        <Link href="/hire" className="px-5"> Hire Me </Link>
                       
                </ul>
                 </div>
              
               <div onClick={handleNave} className="md:hidden cursor-pointer p-2">
                  <FaBars size="30"/>
                </div>

              </div>

              <div className={nav ? 
                "fixed left-0 top-0 w-[40%] sm:hidden h-screen  bg-slate-800 p-10 ease-in duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in h-screen  w-[40%] duration-500"}
                >
                
                <div className="grid grid-cols-2 justify-between">
                  
                  <div><Image src={logo} alt="Logo" className="h-12"/></div>

                    <div onClick={handleNave} className="cursor-pointer text-white px-8">
                         <FaTimes size="30"/>
                    </div>
                </div>
                <div className="flex-col py-2 px-1 uppercase w-full text-white">
                
                    <ul>
                         <Link href="/">
                            <li onClick={()=>setNav(false)} className="py-2"></li>
                            Home
                         </Link>

                         <Link href="/about">
                         <li onClick={()=>setNav(false)} className="py-2"></li>
                            About
                         </Link>
                         <Link href="/project">
                            <li onClick={()=>setNav(false)} className="py-2"></li>
                            Project
                         </Link>

                         <Link href="/hire">
                         <li onClick={()=>setNav(false)} className="py-2"></li>
                            Hire Me
                         </Link>

                    </ul>
                </div>

              </div>
        </div>
    )



}



export default Nav;