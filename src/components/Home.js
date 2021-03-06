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
                         Hi!! My name is Matthew Zoltak. I am a Software Engineer Student at McGill University graduating in December 2021. I have
                        worked for industry leading companies such as <span className="prose lg:prose-xl text-blue-500"> <b> Wix.com </b> </span>  and <span className="prose lg:prose-xl text-blue-500"> <b> Paysafe Group</b> </span>, as well as a small startup <span className="prose lg:prose-xl text-blue-500"> <b> Hypex.gg </b> </span>. 
                        I love using code to create products, designing algorithms to solve complex issues, and colaborating with others.
                    </div>
                </div>
            </section>
        </div>
    </main>
    )
}