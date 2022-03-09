import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestions, postRanking, getRanking } from '../../actions'
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import styles from './Questions.css'

export default function Questions(){
    const { category } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state)=> state.questions);
    const [actualQuestion, setActualQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [count, setCount] = useState(10);
    const [countTotal, setCountTotal] = useState(0);
    const [areDisabled, setAreDisabeld] = useState(false);
    const ranking = useSelector((state)=> state.ranking);

    useEffect(()=> {
        dispatch(getQuestions(category))
    }, [category, dispatch])

    useEffect(()=> {
        const interval = setInterval(() => {
            count > 0 ?
            setCount((prev) => prev - 1) :
            setAreDisabeld(true);
            !isFinished && setCountTotal((prev) => prev + 1)
        }, 1000);
        
        return () => clearInterval(interval)
    }, [count])

    useEffect(async ()=> {
        if (isFinished) {
            let name = null;
            while (name === null || name === ""){
                name = prompt("Ingresa tu nombre: ")
            }
            await dispatch(postRanking({name, score, countTotal, category}))
            await dispatch(getRanking(category))
        }
    }, [isFinished, dispatch])

    function handleSubmit (e, isTrue) {
        isTrue ?
            setScore(score + 1) :
            document.getElementById(questions[actualQuestion].answer.find((e) => e.isTrue).option).classList.add("correctIncorrect");
        e.target.classList.add(isTrue ? "correct" : "incorrect");
        setAreDisabeld(true);
        setTimeout(() => {
            handleContinue();
        }, 1500);
        
    }

    function handleContinue (e) {
        actualQuestion === questions.length - 1 ?
            setIsFinished(true) :
            setActualQuestion(actualQuestion + 1);
        setCount(10);
        setAreDisabeld(false);
    }

    if(isFinished) {
        return (
            <div>
            <Navbar />
            <div className="container" id="boxFinishedGlobal">
                <div className="row vh-100 justify-content-center align-items-center" id="boxFinished">
                    <div className="col-12">
                        <div className="row rounded border boxBack text-center">
                            <h1>Felicidades, haz terminado el juego!</h1>
                        </div>
                        <div className="row rounded border boxBack text-center">
                            <h3>Tuviste {score} respuestas correctas en {countTotal} segundos</h3>
                        </div>
                        <div className="row rounded border boxBack">
                            <div className="col-xs-12 text-center">
                                <button onClick={() => {window.location.href="/"}} className="btn btn-primary">Volver a jugar</button>
                            </div>
                        </div>   
                        <div className="row rounded border boxBack text-center">
                            <div className="table-responsive">
                                <h3>Ranking en la categoría {ranking[0]?.category.name}</h3>
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr className="table-primary table-dark">
                                            <th>Pos.</th>
                                            <th>Nombre</th>
                                            <th>Respuestas</th>
                                            <th>Tiempo</th>
                                        </tr>
                                        {
                                            ranking?.map((e) => (
                                                <tr id={e.id} key={e.id}>
                                                    <td>{ranking.indexOf(e)+1}</td>   
                                                    <td>{e.name}</td>                              
                                                    <td>{e.score}</td>    
                                                    <td>{e.countTotal}</td>    
                                                </tr>
                                                
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>  
                    </div>    
                </div>
            </div>
            </div>
        )
    }
    return (
    <div>
    <Navbar />
    <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
            <div className="col-12">
                <div className="row rounded border boxBack text-center">
                    <h5>Pregunta {actualQuestion + 1} de {questions.length}</h5>
                </div>
                <div className="row rounded border boxBack text-center">
                    <h2>{questions[actualQuestion]?.question}</h2>
                </div>
                <div className="row rounded border boxBack">
                    {
                        questions[actualQuestion]?.answer.map((el) => (
                            <div className="col-xs-12 col-md-6 text-center" key={el.option}>
                            <button
                                id={el.option}
                                onClick={(e) => handleSubmit(e, el.isTrue)}
                                disabled={areDisabled}
                                className="btn btn-primary">
                                {el.option}
                            </button>
                            </div>
                        ))
                    }
                </div>
                <div className="row rounded border boxBack">
                    {
                        count > 0 ? 
                        <div className="col-xs-12 text-center">
                            <span>Tiempo restante: {count}</span>
                        </div>
                        :
                        <div className="col-xs-12 text-center">
                            <button onClick={(e) => handleContinue(e)} className="btn btn-primary">Continuar</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
    </div>        
    )
}