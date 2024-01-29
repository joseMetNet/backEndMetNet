import dotEnv from "dotenv";
// utilizar variables de entorno
dotEnv.config();

export default {
    port: process.env.PORT  || "8080",
    mongo_connection:  process.env.URL_DATABASE_MONGO || "",
    sql_connection: process.env.DATABASE_URL_SQL || ""
}