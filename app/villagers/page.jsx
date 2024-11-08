'use client'
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

export default async function Character(){
    const router = useRouter()
    const prisma = new PrismaClient()

    let villagers = await prisma.villager.findMany()

    const villagerList = villagers.map((villager)=>
        <li>
            {villager.name}
        </li>
    )

    return(
        <div>
            <ul>
                {villagerList}
            </ul>
            <button type="button" onClick={()=> router.push('/') + setIsViewed(true)}>
                Back to Learning
            </button>
        </div>
    );
}