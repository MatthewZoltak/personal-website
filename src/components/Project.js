import React, {useEffect, useState} from "react"
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react";


export default function Project(){
    const [projectData,setProjectData] = useState(null)
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            body,
            startdate,
            enddate,
            place,
            company,
            link,
            tags
        }`).then((data)=> setProjectData(data)).catch(console.error)
    },[])

    return (
        <main className="bg-blue-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my Projects Page</h2>
                <section className="grid grid-cols-2 gap-8">
                {projectData && projectData.map((project, index)=> (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Date: {project.startdate} - {project.enddate}</strong>
                            </span>
                            <span>
                                <strong className="font-bold">{project.company}</strong>
                                
                            </span>
                            {/* <BlockContent blocks={project.body} projectId="9cs54w69" dataset="production"/> */}
                            <p className="my-6 text-lg text-gray-700 leading-relaxed"><BlockContent blocks={project.body} projectId="9cs54w69" dataset="production"/></p>
                            <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-blue-500 font-bold hover:underline hover:text-blue-400">
                            View The Github Repository{" "}
                            <span role="img" aria-label="right pointer">????</span>
                            </a>
                        </div>
                    </article>
                    ) )}
                </section>
            </section>
        </main>
    )
}