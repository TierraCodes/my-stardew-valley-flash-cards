'use client'
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react";

export default function Flashcard(){
    
    let [villagers, setVillager] = useState([])
    
    useEffect(() =>{
        fetch("villagers.json")
          .then(response => response.json())
          .then(data => {
            setVillager(data.villagers)
          })
    }, []);

    let [selectedVillager, setSelectedVillager]=useState(-1)

    const getRandomCharacter = () =>{
        const keys = Object.keys(villagers)
        const index = keys[Math.floor(Math.random()*keys.length)]
        console.log(villagers[index])
        setSelectedVillager(villagers[index])
    }


    let villagerCard = selectedVillager.get((villager)=>
        <div className="flashcard" key={villager.id} 
            onClick={getRandomCharacter()}>
            {villager.name}
        </div>
    );

    return (
        <div id="flexbox">
            <h1>How well were you paying attention?</h1>
            {villagerCard}
        </div>
    );
}

