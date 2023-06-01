
import {getH} from "../generate";
import {_typeormDS} from "../typeorm/datasource";
import {HumanEntity} from "../typeorm/humanEntity";
import "reflect-metadata"
import {LessThan, MoreThanOrEqual, Not} from "typeorm";
import {randomInt} from "crypto";

const N = Number(process.argv[2]) ?? 0;

async function main() {
    await _typeormDS.initialize()

    const humanRepository = _typeormDS.getRepository(HumanEntity)
    let i = 0;
    const _new = []
    while (i < N) {
        _new.push (getH() as HumanEntity)
        i++;
    }
    await humanRepository.insert(_new)

    i = 0;

    while (i < N) {
        await humanRepository.find({where: {age: LessThan(randomInt(0,100))}})
        i++;
    }
    await humanRepository.delete({age: MoreThanOrEqual(0)})
    await _typeormDS.destroy()
}
main()