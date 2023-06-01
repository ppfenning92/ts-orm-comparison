import {DataSource} from "typeorm";
import {CityEntity, HumanEntity} from "./humanEntity";

export const _typeormDS = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "super_secret_pass",
    database: "ts-orm",
    entities: [
        HumanEntity,CityEntity
    ],
})