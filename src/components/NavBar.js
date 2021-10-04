import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar(){
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                     exact 
                     activeClassName="text-white"
                     className="inline-flex items-center py-6 px3 mr-4 text-blue-100 font-bold cursive tracking-widest">
                        Matthew
                    </NavLink>
                    <NavLink to="/work" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200" activeClassName="text-blue-100 bg-blue-700">
                        Experience
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200" activeClassName="text-blue-100 bg-blue-700">
                        Projects
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-200" activeClassName="text-blue-100 bg-blue-700">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/MatthewZoltak" className="mr-4" target="_blank" fgColor="#fff" style={{height: 45, width:45}}/>
                    <SocialIcon url="linkedin.com/in/matthew-zoltak-278b83158" className="mr-4" target="_blank" fgColor="#fff" style={{height: 45, width:45}}/>
                </div>
            </div>
        </header>
    )
}