import {integer, pgTable, serial, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {drizzle} from "drizzle-orm/node-postgres";
import {Pool} from "pg";
import {migrate} from "drizzle-orm/node-postgres/migrator";

export const human = pgTable('drizzle_humans', {
    id: serial('id').primaryKey(),
    uuid: uuid('uuid').defaultRandom(),
    name: varchar('name', {length: 200}).notNull(),
    quote: text('quote'),
    color: varchar('color', {enum: ['green', 'blue', 'red', 'black', 'hotpink']}),
    ip: varchar('ip', {length:15}),
    age: integer('age'),
    dob: timestamp('dob', {mode: 'string'})
})


const pg = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'super_secret_pass',
    database: 'ts-orm',
    port: 5432,
})
const db = drizzle(pg)
migrate(db, {migrationsFolder: './drizzle/migrations'})
    .then(() => {
        console.log("Migrations complete!");
        process.exit(0);
    })
    .catch((err) => {
        console.error("Migrations failed!", err);
        process.exit(1);
    });