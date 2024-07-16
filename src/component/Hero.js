import {ArrowRightCircleIcon} from '@heroicons/react/24/solid'
export default function Hero() {
    return (
        <section className='relative bg-hero-img bg-cover bg-top h-screen flex items-center'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <h1 className='relative text-5xl font-bold text-white py-32 px-16'>
                Hi,<br/> This is <span className='text-lime-400'>SANJAY</span> Here!
                <p className="text-2xl"><span className="text-lime-500 font-playwrite">I'm</span> a Web Developer</p>
                <button className="group text-sm text-[#3b3a3a] px-4 py-2 bg-gradient-to-r from-white to-gray-500 hover:scale-110 duration-200 rounded-lg">
                    View Portfolio<span> <ArrowRightCircleIcon className="w-6 h-6 inline-block group-hover:rotate-90 duration-200" /></span></button>
            </h1>
        </section>
    );
}