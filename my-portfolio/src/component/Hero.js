
export default function Hero() {
    return (
        <section className='relative bg-hero-img bg-cover bg-top h-screen flex items-center'>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <h1 className='relative z-20 text-5xl font-bold text-white py-32 px-16'>
                Hi,<br/> This is <span className='text-lime-400'>SANJAY</span> Here!
                <p className="text-2xl"><span className="text-lime-500 font-playwrite">I'm</span> a Web Developer</p>
            </h1>
        </section>
    );
}