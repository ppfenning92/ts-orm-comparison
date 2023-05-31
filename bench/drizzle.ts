
import {db as drizzle, human, Human} from "../drizzle/db/schema";
import {getH} from "../generate";
import {eq, gte, lt, lte} from "drizzle-orm";
import {randomInt} from "crypto";
const N = Number(process.argv[2]) ?? 0;

async function main() {
    let i = 0;
    const _new = []
    while (i<N) {
        _new.push(getH() as Human)
        i++;
    }
       await drizzle.insert(human).values(_new).returning()

    i = 0;

    while (i<N) {
        await drizzle.select().from(human).where(lt(human.age, randomInt(0,100)))
        i++;
    }
    await drizzle.delete(human).where(gte(human.age, 0))
    process.exit(0)
}
main()