import {faker} from '@faker-js/faker';
import {type Human} from "./entity";

const N = Number(process.argv[2]) ?? 0;


let i = 0;

export function getH() {
    return {
        name: faker.person.fullName(),
        quote: faker.hacker.phrase(),
        color: faker.helpers.arrayElement(['green', 'blue', 'red', 'black', 'hotpink']),
        ip: faker.internet.ipv4(),
        age: faker.number.int({min: 0, max: 100}),
        dob: faker.date.anytime(),
    };
}

while (i < N) {
    const h = getH()
    console.log(JSON.stringify(h))
    i++;
}

