import React from "react";
import { getCategories } from "../../actions/index";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home(){
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)

    useEffect(()=>{
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div>
            <h1>APP DE PREGUNTAS Y RESPUESTAS</h1>
            <h3>Selecciona la categoría:</h3>
            <ul>
            {
                categories?.map((e) => {
                    return (
                        <Link to = {"/" + e.name.toLowerCase()} key={e.name}>
                            <li>{e.name}</li>
                        </Link>
                    )
                })
            }
            </ul>
        </div>
    )
}