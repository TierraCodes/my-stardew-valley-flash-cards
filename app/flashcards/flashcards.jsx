'use client'
import { useState } from "react";
import { useEffect } from "react";

export default function Flashcards(props){
    let [percentUnderstood, setPercentUnderstood] = useState(1)

    const updatePercentUnderstood = (button) =>{
        let percent = 1
        if(percentUnderstood <= 100){
            if(button==="easy"){
                percent = (percentUnderstood + (percentUnderstood * 25))
            }else if(button==="medium"){
                percent = (percentUnderstood + (percentUnderstood * 15))
            }else if(button==="hard"){
                percent = (percentUnderstood + (percentUnderstood * 3))
            }
        }
        setPercentUnderstood(percent)
    }

    const getRandomCharacter = () =>{
        const index = Math.floor(Math.random()*props.villagers.length)
        setCurrentVillager(props.villagers[index])
        setAnswer(false)
    }

    const [currentVillager,setCurrentVillager] = useState([])

    useEffect(()=>{
        getRandomCharacter()
    }, [])

    const showAnswer = () =>{
        setAnswer(true)
    }

    const [answer,setAnswer] = useState(false)

    const villagerBirthday = 
        <div className="flashcard" key={currentVillager.id}
            onClick={()=> getRandomCharacter()}>
            {currentVillager.name}'s birthday is: 
            <br></br>
            {currentVillager.birthday}
        </div>

    const villagerCard = 
        <div className="flashcard" key={currentVillager.id} 
            onClick={()=> showAnswer()}>
            {currentVillager.name}
            <img src={currentVillager.pic} alt="Official image of villager" />
            {currentVillager.question}
        </div>

    return(
        <div id='flashcards-page'>
            <div>
                {answer ? villagerBirthday : villagerCard }
            </div>
            <div id="difficulty-buttons">
                <div>
                    <button id="easy-button" onClick={updatePercentUnderstood("easy")}>Easy</button>
                    <button id="medium-button" onClick={updatePercentUnderstood("medium")}>Medium</button>
                    <button id="hard-button" onClick={updatePercentUnderstood("hard")}>Hard</button>
                </div>
                <div>How hard is this question?</div>
            </div>
        </div>
    )
}