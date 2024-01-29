import { Sequelize } from "sequelize";
import mongoose from "mongoose";
import "colors";
import config from "../config/config";

// Instancia de conexion para sql
const dbInstanceSql = () => {
  const db = new Sequelize(
    config.sql_connection, // URL de conexión a la base de datos
    {
      dialect: "mssql", // cambiar segun sea la necesidad --> defoult: SQL SERVER
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Solo necesario si estás usando una base de datos gratuita en Heroku
        },
      },
    }
  );
  return db;
};

// Conexion para mongo
const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(config.mongo_connection);
    console.log(" 🌳 conectado correctamente a Base de datos online".blue);
  } catch (err) {
    console.log(" 😡 could not connect to database -- MONGO ".red);
  }
};

// Conexion para sql
const dbConncetionSql = async () => {
  try {
    // Instancia de conexion para sql
    const db = dbInstanceSql();
    await db.authenticate();
    console.log(" 🍀 database conected".green);
  } catch (error) {
    console.log(" 😡 could not connect to database -- SQL ".red);
  }
};

export { dbConnection, dbConncetionSql, dbInstanceSql };
