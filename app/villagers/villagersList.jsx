'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function villagerList(props){
    const router = useRouter()

    let [villagerInfo, setVillagerInfo] = useState(-1)

    let villagerList = props.villagers.map((villager)=>
        <li key = {villager.id} className = 'villager-list' onClick={()=> setVillagerInfo(villager.id)}>
            <div id="villager-header">
                <span id='villager-name'>{villager.name}</span>
                <span id='percentage-learned'>{villager.mastery}%</span>
            </div>
            <div>
                <img src={villager.pic}/>
            </div>
            <span style = {{display: villagerInfo == villager.id ? "block" : "none"}}>
                <div>
                    <p>Birthday: {villager.birthday}</p>
                    <p>Availability: {villager.relationshipStatus}</p>
                </div>
            </span>
        </li>
    )

    return(
        <div>
            <nav className="nav-bar">
                <button type='button' onClick={()=>router.push('/')}>Home</button>
                <button type='button' onClick={()=>router.push('/villagers')}>Flashcards</button>
                <button type='button' onClick={()=>router.push('/flashcards')}>Learn</button>
            </nav>
            <div>
                <h1>Learn About All of the Villagers!</h1>
            </div>
            <div>
                <ul id='villager-list'>
                    {villagerList}
                </ul>
            </div>
            <button type="button" onClick={()=> router.push('/')}>
                Back to Learning
            </button>
        </div>
    );
}