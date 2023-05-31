import {PrismaClient} from '@prisma/client'
import {db as drizzle, human, Human} from "./drizzle/db/schema";
import {HumanEntity} from "./typeorm/humanEntity";
import {_typeorm} from "./typeorm/datasource";

const prisma = new PrismaClient()

declare function prismaFindFirst(): Awaited<ReturnType<typeof prisma.human.findFirst>>
const prisma_human = prismaFindFirst()


const drizzle_human = (await drizzle.select().from(human).limit(1))[0]


const typeorm = {human: _typeorm.getRepository(HumanEntity)}
declare function typeormFindFirst(): Awaited<ReturnType<typeof typeorm.human.findOne>>


const typeorm_human = typeormFindFirst()

let x = prisma_human;
x = typeorm_human;
x = drizzle_human;