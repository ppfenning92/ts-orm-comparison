import {DataSource} from "typeorm";
import {HumanEntity} from "./humanEntity";
import "reflect-metadata"
export const _typeorm = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "super_secret_pass",
    database: "ts-orm",
    entities: [
        HumanEntity
    ],
})