'use server'
import { PrismaClient } from '@prisma/client';
import Flashcards from "./flashcards";

export default async function Flashcard(){
    const prisma = new PrismaClient()

    let villagers = await prisma.villager.findMany()

    return(
        <div>
            <Flashcards villagers={villagers}></Flashcards>
        </div>
    )
    
}

