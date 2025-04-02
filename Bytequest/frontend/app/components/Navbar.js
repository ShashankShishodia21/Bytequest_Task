import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from 'next/link';
import Container from './Container';

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='main-nav'>
            <div className='top-nav'>
                <div className='top-name'>
                    <h1>TANN TRIM</h1>
                </div>
                <div className='top-icons'>
                    <CiSearch />
                    <IoPersonOutline />
                    <CiBookmark />
                    <MdOutlineShoppingBag />
                </div>
            </div>
            <div className='bottom-nav'>
                <Link href={""}>Bags</Link>
                <Link href={""}>Travel</Link>
                <Link href={""}>Accesories</Link>
                <Link href={""}>Gifting</Link>
                <Link href={""}>Jewelery</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar