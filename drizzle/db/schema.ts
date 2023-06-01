import {integer, pgTable, serial, text, timestamp, uuid, varchar} from "drizzle-orm/pg-core";
import {drizzle} from "drizzle-orm/node-postgres";
import {Pool} from "pg";
import {migrate} from "drizzle-orm/node-postgres/migrator";
import {InferModel} from "drizzle-orm";

export const human = pgTable('drizzle_humans', {
    id: serial('id').primaryKey(),
    uuid: uuid('uuid').defaultRandom().notNull(),
    name: varchar('name', {length: 200}).notNull(),
    quote: text('quote').notNull(),
    color: varchar('color', {enum: ['green', 'blue', 'red', 'black', 'hotpink']}).notNull(),
    ip: varchar('ip', {length:15}).notNull(),
    age: integer('age').notNull(),
    dob: timestamp('dob', {mode: 'date'}).notNull(),
    cityId: integer('city_id').references(() => cities.id)
})

export type Human = InferModel<typeof human>

export const cities = pgTable('cities', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

export type City = InferModel<typeof cities>

const pg = new Pool({
    host: 'localhost',
    user: 'root',
    password: 'super_secret_pass',
    database: 'ts-orm',
    port: 5432,
})

export const db = drizzle(pg)
// migrate(db, {migrationsFolder: './drizzle/migrations'})
//     .then(() => {
//         console.log("Migrations complete!");
//         process.exit(0);
//     })
//     .catch((err) => {
//         console.error("Migrations failed!", err);
//         process.exit(1);
//     });