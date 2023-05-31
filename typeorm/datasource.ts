import {DataSource} from "typeorm";
import {Human} from "./human";

export const PostgresDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "super_secret_pass",
    database: "ts-orm",
    entities: [
        Human
    ],
})