'use client'
import { useRouter } from 'next/navigation'


export default function villagerList(props){
    const router = useRouter()

    const villagerList = props.villagers.map((villager)=>
        <li key={villager.id} className='villager-list'>
            <div id="villager-header">
                <span id='villager-name'>{villager.name}</span>
                <span id='percentage-learned'>%</span>
            </div>
            <div>
                <img src={villager.pic}/>
            </div>
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