import person from '../assets/person-icon.webp';
import mail from '../assets/mail.webp';
import location from '../assets/location.png';
import instagramlogo from '../assets/instagram-logo.png';
import xlogo from '../assets/twitter-logo.png';
import linkedinlogo from '../assets/linkedin.png';
export default function Contact() {
    return <section className="w-svw h-svh bg-[#3c3c3c] text-white">
        <h1 className="text-3xl font-bold text-lime-400 text-center py-10 gap-3">Contact me</h1>
        <div className = "w-full h-3/4 flex flex-wrap items-center justify-around">
        <div className="w-full md:w-1/2 md:h-3/4 h-1/2 flex flex-col ">
  <div className="flex items-center px-20 mb-5">
    <img className="w-10 h-10" src={person} alt="name" />
    <div className="ml-4">
      <p className="text-2xl font-bold">Name</p>
      <p className="text-lg">Sanjay S</p>
    </div>
  </div>
  <div className="flex items-center px-20 mb-5">
    <img className="w-10 h-10" src={mail} alt="name" />
    <div className="ml-4">
      <p className="text-2xl font-bold">Email</p>
      <p className="text-lg">sanjays13408@gmail.com</p>
    </div>
  </div>
  <div className="flex items-center px-20 mb-5">
    <img className="w-7 h-10" src={location} alt="name" />
    <div className="ml-4">
      <p className="text-2xl font-bold">Location</p>
      <p className="text-lg">Erode,TamilNadu</p>
    </div>
  </div>
  <div className="flex ml-20 gap-3">
        <img className="w-10 h-10 cursor-pointer" src={instagramlogo} alt="name"></img>
        <img className="w-10 h-10 cursor-pointer" src={xlogo} alt="name"></img>
        <img className="w-10 h-10 cursor-pointer" src={linkedinlogo} alt="name"></img>

    </div>
</div>

         
<form className="w-full md:w-1/3 md:h-3/4 h-1/2 flex flex-col md:ml-0 ml-6 md:mt-0 mt-3 right-0 md:right-2">
  <p className="text-xl font-bold text-lime-400 mb-5">Message Me</p>
  
  <div className="flex mb-2">
    <input className="w-2/5 h-10 bg-transparent border border-white text-white placeholder-gray-500 px-2 py-1 focus:outline-none rounded-md mr-1" placeholder="Name"/>
    <input className="w-2/5 h-10 bg-transparent border border-white text-white placeholder-gray-500 px-2 py-1 focus:outline-none rounded-md" placeholder="Email"/>
  </div>
  
  <input className="w-4/5 h-10 bg-transparent border border-white text-white placeholder-gray-500 px-2 py-1 focus:outline-none rounded-md mb-2" placeholder="Subject"/>
  <textarea className="w-4/5 bg-transparent border border-white text-white placeholder-gray-500 px-2 py-1 focus:outline-none rounded-md mb-5" placeholder="Message"></textarea>
  <button className="w-2/5 bg-white text-[#626262] px-2 py-1 focus:outline-none rounded-md mb-5">Send</button>

</form>
         </div>
         <footer>
            <p className='text-center ml-0'>Created by Sanjay.S | © 2024 All rights reserved</p>
         </footer>
    </section>
}