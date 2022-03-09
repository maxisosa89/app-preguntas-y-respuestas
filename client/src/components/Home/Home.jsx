import React from "react";
import { getCategories } from "../../actions/index";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.css'

export default function Home(){
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)

    useEffect(()=>{
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-auto">
                    <div className="row title rounded border">
                        <div className="col text-center"><h1>APP DE PREGUNTAS Y RESPUESTAS</h1></div>
                    </div>  

                    <div className="row box2 rounded border">
                        <div className="col text-center"><h3>Selecciona una categoría:</h3></div>
                    </div>
                    <div className="row box2 rounded border">
                        {
                            categories?.map((e) => {
                                return (
                                    <div className="col-xs-12 col-md-6 col-lg-4 text-center" key={e.name}>
                                        <Link to = {"/" + e.name.toLowerCase()}>
                                            <button className="btn btn-primary" id={e.name}>{e.name}</button>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
            
        </div>
    )
}