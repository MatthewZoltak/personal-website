import React from "react"
import image from "../arctic.jpg"
import profileimg from "../matthew_zoltak.jpg"

export default function Home(){
    return(
        // <main>
        //     <img src={image} alt="Arctic Background" className="absolute object-cover w-full h-full"/>
        //     <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px8">
        //         <h1 className="text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name">Hey. I'm Matt</h1>
        //     </section>
        // </main>    
        <main className="relative">
        <img src="https://wallpaperaccess.com/full/1474624.jpg" alt="Arctic Background" className="absolute w-full"/>
        <div className="p-10 lg:pt-48 container mx-auto relative">
            <section className="bg-black rounded-lg shadow-2xl lg:flex pt-20 pl-20 pb-20">
                <img src={profileimg} alt="matthew zoltak" className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                <div className="text-lg flex-col justify-center">
                    <h1 className="cursive text-6xl text-white mb-2">
                        Matthew Zoltak
                    </h1>
                    <h2 className="cursive text-xl text-blue-300 mb-4">Software Engineer</h2>
                    <div className="prose lg:prose-xs text-white">
                        Hi!! My name is Matthew Zoltak. I am a Software Engineer with over 3.5 years of 
                        industry experience designing, developing, and maintaining scalable systems in diverse environments, 
                        from agile startups like <span className="prose lg:prose-xl text-blue-500"> <b> Elpha Secure </b> </span> to large enterprise corporations like 
                        <span className="prose lg:prose-xl text-blue-500"> <b> Wix.com </b> </span> and 
                        <span className="prose lg:prose-xl text-blue-500"> <b> Paysafe </b> </span>. Proven expertise in backend development, 
                        microservices architecture, database design, and API implementation. An analytical problem-solver dedicated to building reliable, 
                        high-performance software solutions and collaborating effectively within technical teams to drive project success.
                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}
