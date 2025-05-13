import { Schema, model, connect } from "mongoose";

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectDB = async () => {
  try {
    await connect(URI_DB)
    console.log("conectado a la BD")
  } catch (error) {
    console.log("Error al conectar a la BD")
  }
}

connectDB()
