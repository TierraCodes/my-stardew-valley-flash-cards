'use client'
import { useState } from "react";
import { useEffect } from "react";

export default function Flashcards(props){

    const getRandomCharacter = () =>{
        const index = Math.floor(Math.random()*props.villagers.length)
        setCurrentVillager(props.villagers[index])
    }

    const [currentVillager,setCurrentVillager] = useState([])

    useEffect(()=>{
        getRandomCharacter()
    }, [])

    const villagerCard = 
        <div className="flashcard" key={currentVillager.id} 
            onClick={()=> getRandomCharacter()}>
            {currentVillager.name}
            <img src={currentVillager.pic} alt="" />
            {currentVillager.question}
        </div>

    return(
        <div id='flashcards-page'>
            {villagerCard}
        </div>
    )
}
