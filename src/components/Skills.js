import React, {useState, useEffect} from "react";
import sanityClient from "../client.js"
import BlockContent from "@sanity/block-content-to-react"

export default function Skills(){
    const [skillData, setSkills] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "skill"]{
            name,
            skills
        }`).then((data) => setSkills(data)).catch(console.error)
    },[])

    return (
    <main className="bg-blue-100 min-h-screen p-12">
        <section className="container mx-auto">
            <h1 className="text-5xl flex justify-center cursive">Skills</h1>
            <h2 className="text-lg text-gray-600 flex justify-center mb-12">Here are my skills I have acquired throughout my engineering career</h2>
            {/* <div className="grid grid-cols-1 gap-8"> */}
            <section className="grid grid-cols-1 gap-8">
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <div className="text-gray-500 space-y-4">
                        {skillData && skillData.map((skill, index)=> (
                            <div>
                            <span className="text-black text-3xl font-bold">{skill.name}: </span>  {skill.skills.map((skill, index) => (<span className="text-blue-800 font-bold text-xl">{skill}, </span>))}
                            </div>
                            ) )}
                        </div>
                    </article>
                </section>
        </section>
    </main>
        )
}