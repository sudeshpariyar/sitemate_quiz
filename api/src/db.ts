import "reflect-metadata";
import { DataSource } from "typeorm";
import { Issue } from "./entity/Isues";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_host,
  port: process.env.DB_port as unknown as number,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
  //logging: true,
  entities: [Issue],
  synchronize: true,
  subscribers: [],
  migrations: [],
});
