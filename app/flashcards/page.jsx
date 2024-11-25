'use server'
import { PrismaClient } from '@prisma/client';
import Flashcards from "./flashcards";

export default async function Flashcard(){
    const prisma = new PrismaClient()

    let villagers = await prisma.villager.findMany()

    return(
        <div>
            <Flashcards villagers={villagers} updateVillager={updateVillager}></Flashcards>
        </div>
    )
    
}

async function updateVillager(villager) {
    'use server'
    const prisma = new PrismaClient()
    await prisma.villager.update({
        where: {id:villager.id},
        data: {mastery:villager.mastery}
    })
    console.log(villager.mastery)
}

