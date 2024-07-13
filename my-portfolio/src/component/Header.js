import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Header(){
        const [toggle, setToggle] = useState(false);
        const links = [
            { id: 1, link: 'Home' },
            { id: 2, link: 'About' },
            { id: 3, link: 'Services' },
            { id: 4, link: 'Contact' },
        ];
    
        return (
            <header className="flex justify-between px-4 py-4 bg-primary text-white">
                <h1 className="text-3xl font-bold text-lime-400">S SANJAY</h1>
                <ul className="hidden md:flex">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            className="px-4 cursor-pointer capitalize font-medium hover:scale-110 hover:text-lime-400 duration-300"
                        >
                            {link.link}
                        </li>
                    ))}
                </ul>
                <div onClick={() => setToggle(!toggle)} className="flex md:hidden z-30 cursor-pointer">
                    {toggle ? <XMarkIcon className="text-white h-10" /> : <Bars3Icon className="text-white h-10" />}
                </div>
                {toggle && (
                    <ul className="flex flex-col justify-center absolute z-20 items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-[#252424] to-[#5e5d5d]">
                        {links.map((link) => (
                            <li
                                key={link.id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            >
                                {link.link}
                            </li>
                        ))}
                    </ul>
                )}
            </header>
        );
    };
