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
    const images = [
        {
            src: htmllogo,
            alt: "html"
        },
        {
            src: csslogo,
            alt: "css"
        },
        {
            src: jslogo,
            alt: "js"
        },
        {
            src: reactlogo,
            alt: "react"
        },
        {
            src: tailwindlogo,
            alt: "tailwind"
        },
        {
            src: materialui,
            alt: "materialui"
        },
    ]
    const backEndImages = [
        {
            src: javalogo,
            alt: "java"
        },
        {
            src: pythonlogo,
            alt: "python"
        },
        {
            src: clogo,
            alt: "c"
        }
    ]
    return <section className="text-[#5f5e5e] w-svw h-svh bg-white  ">
        <div className="w-full h-1/6">
        <h1 className="font-bold text-5xl text-lime-400 px-20 py-10 text-center">Skills Known</h1>
        </div>
        <div className="w-full md:w-1/2 md:h-1/4 h-1/3 ">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 md:pb-4 pt-16 pb-4 px-5 flex">Front-End</h1>
        <div className="w-full md:w-full md:h-1/3 md:py-3  flex flex-wrap ml-3 md:gap-4 gap-4 md:items-center">
        {images.map((image, index) => (
            <img key={index} className="w-16 h-16 md:w-0.7/4 md:h-16" src={image.src} alt={image.alt}/>
        ))}
        </div>
          

        </div>
        <div className=" w-full md:w-1/2 md:h-1/4 h-1/3">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 pt-16 pb-4 px-5 flex">Programming Languages</h1>
        <div className="w-1/2 h-1/3 md:h-3/4  flex flex-row ml-3 md:gap-8 gap-4 md:items-center">
        {
            backEndImages.map((images,index) => (
                <img key={index} className="w-16 h-16 md:w-0.7/4 md:h-16" src={images.src} alt={images.alt}/>
            ))
        }
            </div>
        </div>
        <div className=" w-1/2 md:h-1/4 h-1/3">
        <h1 className="font-bold text-3xl md:px-20 md:py-0 px-5 flex">Database</h1>
        <div className="w-1/2 h-1/3 md:h-3/4  flex flex-row ml-3 md:gap-2 gap-4 md:items-center">
            <img className='w-16 h-16 md:w-0.7/4 md:h-3/4' src={mysql} alt="mysql"/>
            </div>
        </div>
    </section>
}