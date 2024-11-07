'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';


export default function Home() {
  const router = useRouter()
  let [isViewed, setIsViewed] = useState(-1)
  return (
    <div>
      <h1>Stardew Valley Character Cards</h1>
      <button type="button" onClick={()=>
          router.push('/villagers') + setIsViewed(1)}>
          Check out all the characters!
      </button>
      {isViewed ?
        <p>
          Ready for a challenge?
          <br></br>
          <button type='button' onClick={()=>router.push('/flashcards')}>
              Test your knowledge!
          </button>
        </p>:""}
    </div>
  );
}
