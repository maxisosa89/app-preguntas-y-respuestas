import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from '../../actions'
import { useDispatch, useSelector } from "react-redux";
import styles from './Questions.css'

export default function Questions(){
    const { category } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state)=> state.questions);
    const [actualQuestion, setActualQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [count, setCount] = useState(10);
    const [areDisabled, setAreDisabeld] = useState(false);

    useEffect(()=> {
        dispatch(getQuestions(category))
    }, [category, dispatch])

    useEffect(()=> {
        const interval = setInterval(() => {
            count > 0 ?
            setCount((prev) => prev - 1) :
            setAreDisabeld(true);
        }, 1000);
        return () => clearInterval(interval)
    }, [count])

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
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-12">
                    <div className="row rounded border boxBack text-center">
                        <h1>Felicidades, haz terminado el juego!</h1>
                    </div>
                    <div className="row rounded border boxBack text-center">
                        <h3>Tuviste {score} respuestas correctas</h3>
                    </div>
                    <div className="row rounded border boxBack">
                        <div className="col-xs-12 text-center">
                            <button onClick={() => {window.location.href="/"}} className="btn btn-primary">Volver a jugar</button>
                        </div>
                    </div>    
                </div>    
            </div>
        </div>
    )
    }
    return (
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
                            <div className="col-xs-12 col-md-6 text-center">
                            <button
                                key={el.option}
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
    )
}