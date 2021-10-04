import React, {useState, useEffect} from "react";
import sanityClient from "../client.js"
import { Link } from "react-router-dom";

export default function WorkExperience(){
    const [experienceData, setExperience] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "category"]{
            title,
            description
        }`).then((data) => setExperience(data)).catch(console.error)
    },[])

    return (
    <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive">Work Experience</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my work experience page</h2>
            <div className="grid grid-cols-1 gap-8">
                {experienceData && experienceData.map((experience, index) => (
                <article>
                    <span className="block h-64 relative shadow rounded leading-snug bg-white border-l-8 border-blue-400" key={index}>
                        <span className="block realtive h-full pl-4 pt-4">
                            <h3 className="text-gray-800 text-lg font-blog px-3 py-4 text-blue-700 bg-opacity-75">{experience.title}</h3>
                            <div className="w-full h-full rounded-r object-cover">
                            <p>
                                {experience.description}
                            </p>
                        </div>
                        </span>
                    </span>
                </article>
            ))}
            </div>
        </section>
    </main>
        )
}