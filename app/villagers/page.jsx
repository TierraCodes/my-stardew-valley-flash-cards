'use server'
import { PrismaClient } from '@prisma/client';
import VillagerList from "./villagersList";

export default async function Character(){
    const prisma = new PrismaClient()

    let villagers = await prisma.villager.findMany()

    return(
        <div>
            <VillagerList villagers={villagers}></VillagerList>
        </div>
    )
    
}