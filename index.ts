import {PrismaClient} from '@prisma/client'
import {cities, db as drizzle, human, Human} from "./drizzle/db/schema";
import {HumanEntity} from "./typeorm/humanEntity";
import {_typeormDS} from "./typeorm/datasource";
import {eq} from "drizzle-orm";

const prisma = new PrismaClient();


async function _drizzle() {
    const h = (await drizzle.select().from(human).limit(1))[0]
    const h_with_selects = (await drizzle.select({
        id: human.id
    }).from(human).where(eq(human.id, 1)))[0]

    const h_join_cities = (await drizzle.select({
        id: human.id,
        city: {id: cities.id, name: cities.name}
    }).from(human)
        .leftJoin(cities, eq(human.cityId, cities.id))

    )[0]
    console.log(h_join_cities.city?.name)
}

async function _prisma() {
    const h = await prisma.human.findFirst()
    const h_with_selects = await prisma.human.findFirst({select: {id: true}, where: {id: {equals: 1}}})
    console.log(h?.city)

    const h_join_cities = await
        prisma.human.findFirst({
        select: {
            id: true,
            city: {
                select: {id: true, name: true}
            }},
    })
    console.log(h_join_cities?.city?.name)
}


async function _typeorm() {
    const humanRepository = _typeormDS.getRepository(HumanEntity);
    const h = await humanRepository.findOne({select: {id: true}})

    console.log(h?.city)

    const h_join_cities = await
        humanRepository.findOne({
        select: {id: true},
        relations: {city: true}
    })
    console.log(h_join_cities?.city?.name)
}


drizzle.select({
    id: human.id,
    city: {id: cities.id, name: cities.name}
}).from(human)
    .leftJoin(cities, eq(human.cityId, cities.id))
