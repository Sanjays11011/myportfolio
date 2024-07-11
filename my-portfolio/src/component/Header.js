import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Header(){
    const [toggle,setToggle] = useState(false);
    return <header className="flex justify-between px-4 py-4 bg-primary text-white fixed">
        <h1 className="text-3xl font-bold text-lime-400">S SANJAY</h1>
        <nav className = "hidden md:block">
        <ul className="flex">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        </nav>
        {toggle && <nav className = "block md:hidden">
        <ul className="flex flex-col mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggle(!toggle)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
    </header>
}