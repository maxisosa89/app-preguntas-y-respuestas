import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Contacto.css"

export default function Readme(){
    
    return (
        <div className="globalReadme">

            <Navbar />
            <div className="container" id="boxReadme">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row rounded border text-center boxReadme">
                            <h1>Contacto</h1>
                        </div>
                        <div className="row rounded border boxReadme">
                            <span>Hola, soy un Developer con experiencia en el stack de JS. Te invito a visitar mi portfolio, donde podrás ver otros proyectos en los que he trabajado.</span>

                            <ul className="">
                                <li>Portfolio</li>
                                <li>Linkedin</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}