'use client'
import { useRouter } from 'next/navigation'
import isViewed from './villagers/page'


export default function Home() {
  const router = useRouter()
  
  return (
    <div>
      <h1>Stardew Valley Character Cards</h1>
      <button type="button" onClick={()=>
          router.push('/villagers')}>
          Check out all the characters!
      </button>
      {isViewed ?
        <p>
          Ready for a challenge?
          <br></br>
          <button type='button' onClick={()=>router.push('/flashcards')}>
              Test your knowledge!
          </button>
        </p> : 
        <p></p>
      }
    </div>
  );
}
