import React, {useState, useEffect} from "react";
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react"

export default function WorkExperience(){
    const [experienceData, setExperience] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "work"]{
            title,
            company,
            startdate,
            finishdate,
            place,
            body
        }`).then((data) => setExperience(data)).catch(console.error)
    },[])

    return (
    <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive">Skills</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">Here are my skills I have acquired throughout my engineering career</h2>
            {/* <div className="grid grid-cols-1 gap-8"> */}
            <section className="grid grid-cols-1 gap-8">
                {experienceData && experienceData.map((work, index)=> (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2">
                                {work.company}
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            
                            <span>
                                <strong className="font-bold text-xl">{work.title}</strong>
                                
                            </span>
                            <span>
                                <strong className="font-bold">Date: {work.startdate} - {work.finishdate}</strong> {" "}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed"><BlockContent blocks={work.body} workId="9cs54w69" dataset="production"/></p>
                        </div>
                    </article>
                    ) )}
                </section>
        </section>
    </main>
        )
}