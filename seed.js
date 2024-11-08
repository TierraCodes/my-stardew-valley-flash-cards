const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.Villager.createMany({
            data: [
                {id:0,      name:"Abigail",     birthday:"Fall 13",     relationshipStatus:"Single"},
                {id:1,      name:"Alex",        birthday:"Summer 13",   relationshipStatus:"Single"},
                {id:2,      name:"Caroline",    birthday:"Winter 7",    relationshipStatus:"Married"},
                {id:3,      name:"Clint",       birthday:"Winter 26",   relationshipStatus:"Unavailable"},
                {id:4,      name:"Demetrius",   birthday:"Summer 19",   relationshipStatus:"Married"},
                {id:5,      name:"Dwarf",       birthday:"Summer 22",   relationshipStatus:"Unavailable"},
                {id:6,      name:"Elliot",      birthday:"Fall 5",      relationshipStatus:"Single"},
                {id:7,      name:"Emily",       birthday:"Spring 27",   relationshipStatus:"Single"},
                {id:8,      name:"Evelyn",      birthday:"Winter 20",   relationshipStatus:"Married"},
                {id:9,      name:"George",      birthday:"Fall 24",     relationshipStatus:"Married"},
                {id:10,     name:"Gus",         birthday:"Summer 8",    relationshipStatus:"Unavailable"},
                {id:11,     name:"Haley",       birthday:"Spring 14",   relationshipStatus:"Single"},
                {id:12,     name:"Harvey",      birthday:"Winter 14",   relationshipStatus:"Single"},
                {id:13,     name:"Jas",         birthday:"Summer 4",    relationshipStatus:"Unavailable"},
                {id:14,     name:"Jodi",        birthday:"Fall 11",     relationshipStatus:"Married"},
                {id:15,     name:"Kent",        birthday:"Spring 4",    relationshipStatus:"Married"},
            ],
            skipDuplicates: true
        })
}

seed()