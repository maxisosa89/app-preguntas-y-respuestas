import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Readme.css"

export default function Readme(){
    
    return (
        <div className="globalReadme">

            <Navbar />
            <div className="container" id="boxReadme">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="row rounded border text-center boxReadme">
                            <h1>Readme</h1>
                        </div>
                        <div className="row rounded border boxReadme">
                            <ul className="">
                                <li>Construye una aplicacion de trivias</li>
                                <li>Al ingresar, podré elegir una categoría de preguntas</li>
                                <li>A continuacion me mostrará de manera aleatoria preguntas que se encuentran en un banco de preguntas con 4 posibles respuestas, pero solo una es la correcta.</li>
                                <li>Debe pedirme responder 20 preguntas</li>
                                <li>Cuando termine la última, debe entregarme un msj de "felicitaciones" y agregarme al ranking de usuarios que han terminado el juego de trivia.</li>
                                <li>Además, debe mostrarme el tiempo que me tomó terminar esta trivia.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}