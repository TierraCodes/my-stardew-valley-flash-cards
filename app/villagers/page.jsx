'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Character(){
    const router = useRouter()
    
    let [villagers, setVillager] = useState([])
    let [isViewed, setIsViewed] = useState(false)

    useEffect(() =>{
        fetch("villagers.json")
          .then(response => response.json())
          .then(data => {
            setVillager(data.villagers)
          })
    }, []);

    let characterList = villagers.map((character)=>
        <li key={character.id}>{character.name}</li>
    );
    
    return(
        <div>
            <ul>{characterList}</ul>
            <button type="button" onClick={()=> router.push('/') + setIsViewed(true)}>
                Back to Learning
            </button>
        </div>
    );
}