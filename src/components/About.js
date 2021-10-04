import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import image from "../matthew_zoltak.jpg"

export default function About(){
    // const [author, setAuthor] = useState(null);

    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "author"]{
    //         name,
    //         bio
    //     }`).then((data) => )
    // })
    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={image} alt="matthew zoltak" className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                    <div className="text-lg flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            Hey!!! I'm{" "} <span className="text-blue-100">Matt</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                             I am Matt
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}