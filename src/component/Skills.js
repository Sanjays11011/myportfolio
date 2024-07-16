import htmllogo from "../assets/html-logo.png";
import csslogo from "../assets/css-logo.png";
import jslogo from "../assets/javascript-logo.webp";
import reactlogo from "../assets/react-logo.png";
import tailwindlogo from "../assets/Tailwind_CSS_Logo.svg.png";
import materialui from "../assets/material-ui.png";
import javalogo from "../assets/java-logo.png";
import pythonlogo from "../assets/python-logo.webp";
import clogo from "../assets/c-logo.png";
import mysql from "../assets/mysql-logo.png";
export default function Skills() {
    return <section className="text-[#5f5e5e] w-svw h-svh bg-white">
        <div className="w-full h-1/6">
        <h1 className="font-bold text-5xl text-lime-400 px-20 py-10 flex justify-center">Skills Known</h1>
        </div>
        <div className="w-full md:h-1/4 h-1/3">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 md:pb-4 py-16 px-5 flex">Front-End</h1>
        <div className="w-1/2 h-1/3  md:py-3  flex flex-row ml-3 md:gap-2 gap-4 md:items-center justify-between">
            <img className='w-16 h-16 md:w-0.7/4 md:h-16' src={htmllogo}/>
            <img className='w-16 h-16 md:w-0.7/4 md:h-16' src={csslogo}/>
            <img className='w-16 h-16 md:w-0.7/4 md:h-16' src={jslogo}/>
            <img className='w-16 h-16 md:w-0.7/4 md:h-16' src={reactlogo}/>
            <img className="hidden md:block w-16 h-16 md:w-0.7/4 md:16" src={tailwindlogo}/>
            <img className="hidden md:block w-16 h-16 md:w-0.7/4 md:16" src={materialui}/>
            </div>
            <div className=" md:hidden w-1/4 h-1/2 md:h-full flex flex-row ml-3 md:gap-3 gap-4  md:items-center justify-between">
            <img className="w-16 h-16 md:w-0.7/4 md:h-3/4" src={tailwindlogo}/>
            <img className="w-16 h-16 md:w-0.7/4 md:h-3/4" src={materialui}/>
            </div>
        </div>
        <div className=" w-full md:w-1/2 md:h-1/4 h-1/3">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 py-16 px-5 flex">Back-End</h1>
        <div className="w-1/2 h-1/3 md:h-3/4  flex flex-row ml-3 md:gap-2 gap-4 md:items-center justify-between">
            <img className='w-16 h-16 md:w-0.7/4 md:h-3/4' src={javalogo}/>
            <img className='w-16 h-16 md:w-0.7/4 md:h-3/4' src={pythonlogo}/>
            <img className='w-16 h-16 md:w-0.7/4 md:h-3/4' src={clogo}/>
            </div>
        </div>
        <div className="md:mt-5 w-full md:h-1/4 h-1/3">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 px-5 flex">Database</h1>
        <div className="w-1/2 h-1/3 md:h-3/4  flex flex-row ml-3 md:gap-2 gap-4 md:items-center justify-between">
            <img className='w-16 h-16 md:w-0.7/4 md:h-3/4' src={mysql}/>
            </div>
        </div>
    </section>
}