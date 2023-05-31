import {Human, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

import {getH} from "../generate";
import {randomInt} from "crypto";

const N = Number(process.argv[2]) ?? 0;
async function main() {
    let i = 0;
    const _new = []
    while (i<N) {
        _new.push(getH() as Human)
        i++;
    }
    await prisma.human.createMany({data: _new})

    i = 0;

    while (i<N) {
        const h = await prisma.human.findMany({where: {age: {gte: randomInt(0,100)}}})
        i++;
    }
    await prisma.human.deleteMany({where:{age: {gte:0}}})
}
main()