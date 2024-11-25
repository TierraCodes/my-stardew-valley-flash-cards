'use client'
import { useRouter } from 'next/navigation'
import { useEffect,useState } from 'react';


export default function Home() {
  const router = useRouter()
  
  const [alreadyVisited,setAlreadyVisited] = useState(false)

  useEffect(()=>{
    let visited = localStorage.getItem("alreadyVisited")
    if(visited){
      setAlreadyVisited(true)
    } else {
      setAlreadyVisited(false)
      localStorage.setItem("alreadyVisited", false)
    }
  }, [])

  return (
    <div id='home-page'>
      <nav className="nav-bar">
        <button type='button' onClick={()=>router.push('/')}>Home</button>
        <button type='button' onClick={()=>router.push('/villagers')}>Flashcards</button>
        <button type='button' onClick={()=>router.push('/flashcards')}>Learn</button>
      </nav>
      <div>
        <h1>Stardew Valley Character Cards</h1>
      </div>
      <button type="button" onClick={()=>
        router.push('/villagers')}>
        Check out all the characters
      </button>
      <div>
        {alreadyVisited ?
          <p>
            Ready for a challenge?
            <br></br>
            <button type='button' onClick={()=>router.push('/flashcards')}>
              Test your knowledge!
            </button>
          </p> : <p></p> 
        }
      </div>
    </div>
  );
}
