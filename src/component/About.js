import manicon from '../assets/manface.webp'
export default function About() {
        return <div className=" w-svw h-svh bg-primary text-gray-300">
           <div className="w-full h-1/6">
           <h1 className="font-bold text-5xl text-lime-400 px-20 py-10 flex justify-center">About Me</h1>
           </div>
           <div className=" w-full h-3/4 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className=" md:w-1/4 w-1/2 h-3/4 md:ml-10">
            <img src={manicon} alt="Me" className="rounded-full" /></div>
            <div className=" md:w-1/2 w-3/4 h-3/4 md:mr-10 bg-secondary rounded-xl shadow-2xl">
             <p className="text-lg md:text-xl md:px-20 md:py-12 py-3 px-3">
                I am a recent Computer Science graduate with a strong foundation in software development and a passion for creating efficient,
                         user-friendly applications.
                         Skilled in JavaScript, Python, and SQL, I am a quick learner eager to apply my knowledge in a dynamic tech environment.
                          I thrive in collaborative settings and am committed to continuous learning and growth.</p></div></div>

        </div>
}