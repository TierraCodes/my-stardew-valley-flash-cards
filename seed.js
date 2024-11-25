const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.Villager.createMany({
            data: [
                {id:0,      name:"Abigail",     birthday:"Fall 13",     relationshipStatus:"Single",        pic:"/media/abigail.png",       question:"What is Abigail's birthday?",      mastery:0},
                {id:1,      name:"Alex",        birthday:"Summer 13",   relationshipStatus:"Single",        pic:"/media/alex.png",          question:"What is Alex's birthday?",         mastery:0},
                {id:2,      name:"Caroline",    birthday:"Winter 7",    relationshipStatus:"Married",       pic:"/media/caroline.png",      question:"What is Caroline's birthday?",     mastery:0},
                {id:3,      name:"Clint",       birthday:"Winter 26",   relationshipStatus:"Unavailable",   pic:"/media/clint.png",         question:"What is Clint's birthday?",        mastery:0},
                {id:4,      name:"Demetrius",   birthday:"Summer 19",   relationshipStatus:"Married",       pic:"/media/demetrius.png",     question:"What is Demetrius's birthday?",    mastery:0},
                {id:5,      name:"Elliot",      birthday:"Fall 5",      relationshipStatus:"Single",        pic:"/media/elliot.png",        question:"What is Elliot's birthday?",       mastery:0},
                {id:6,      name:"Emily",       birthday:"Spring 27",   relationshipStatus:"Single",        pic:"/media/emily.png",         question:"What is Emily's birthday?",        mastery:0},
                {id:7,      name:"Evelyn",      birthday:"Winter 20",   relationshipStatus:"Married",       pic:"/media/evelyn.png",        question:"What is Evelyn's birthday?",       mastery:0},
                {id:8,      name:"George",      birthday:"Fall 24",     relationshipStatus:"Married",       pic:"/media/george.png",        question:"What is George's birthday?",       mastery:0},
                {id:9,      name:"Gus",         birthday:"Summer 8",    relationshipStatus:"Unavailable",   pic:"/media/gus.png",           question:"What is Gus's birthday?",          mastery:0},
                {id:10,     name:"Haley",       birthday:"Spring 14",   relationshipStatus:"Single",        pic:"/media/haley.png",         question:"What is Haley's birthday?",        mastery:0},
                {id:11,     name:"Harvey",      birthday:"Winter 14",   relationshipStatus:"Single",        pic:"/media/harvey.png",        question:"What is Harvey's birthday?",       mastery:0},
                {id:12,     name:"Jas",         birthday:"Summer 4",    relationshipStatus:"Unavailable",   pic:"/media/jas.png",           question:"What is Jas's birthday?",          mastery:0},
                {id:13,     name:"Jodi",        birthday:"Fall 11",     relationshipStatus:"Married",       pic:"/media/jodi.png",          question:"What is Jodi's birthday?",         mastery:0},
                {id:14,     name:"Kent",        birthday:"Spring 4",    relationshipStatus:"Married",       pic:"/media/kent.png",          question:"What is Kent's birthday?",         mastery:0},
            ],
            skipDuplicates: true
        })
}

seed()