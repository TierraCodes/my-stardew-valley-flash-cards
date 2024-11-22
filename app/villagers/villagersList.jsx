'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function villagerList(props){
    const router = useRouter()

    const percentUnderstood = 0

    let [villagerInfo, setVillagerInfo] = useState(-1)

    const villagerList = props.villagers.map((villager)=>
        <li key={villager.id} className='villager-list' onClick={setVillagerInfo(villager.id)}>
            <div id="villager-header">
                <span id='villager-name'>{villager.name}</span>
                <span id='percentage-learned'>{percentUnderstood}%</span>
            </div>
            <div>
                <img src={villager.pic}/>
            </div>
            <span style={{display: villagerInfo == villager.id ? "block" : "none"}}>
                <div>
                    <br></br>
                    {villager.birthday}
                    <br></br>
                    {villager.relationshipStatus}
                </div>
            </span>
        </li>
    )

    return(
        <div>
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