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
        isTrue && setScore(score + 1);
        e.target.classList.add(isTrue ? "correct" : "incorrect");
        setAreDisabeld(true);
        setTimeout(() => {
            actualQuestion === questions.length - 1 ?
            setIsFinished(true) :
            setActualQuestion(actualQuestion + 1);
            handleContinue();
        }, 1000);
        
    }

    function handleContinue (e) {
        setCount(10);
        setAreDisabeld(false);
    }

    if(isFinished) {
    return (
        <div>
            <h1>Felicidades, haz terminado el juego!</h1>
            <h3>Tuviste {score} respuestas correctas</h3>
            <button onClick={() => {window.location.href="/"}}>Volver a jugar</button>
        </div>
    )
    }
    return (
    <div>
        <div>
            <h3>Pregunta {actualQuestion + 1} de {questions.length}</h3>
        </div>
        <div>
            <h1>{questions[actualQuestion]?.question}</h1>
        </div>
        <div>
            {
                questions[actualQuestion]?.answer.map((el) => (
                    <button
                        key={el.option}
                        onClick={(e) => handleSubmit(e, el.isTrue)}
                        disabled={areDisabled}>
                        {el.option}
                    </button>
                ))
            }
        </div>
        <div>
            {
                !areDisabled ? 
                <span>Tiempo restante: {count}</span>
                :
                <button onClick={(e) => handleContinue(e)}>Continuar</button>
            }
        </div>
    </div>
    )
}