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

const pokemonSchema = new Schema({
  ncard: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  ps: { type: Number, required: true },
  hability: { type: String, required: true }

})

const Pokemon = model("pokemon", pokemonSchema)

//Funcion para agregar pokemon

const addNewPokemon = async () => {
  try {
  } catch (error) {
  }
}

//Funcion para obtener lista de pokemones agregados

const getAllPokemon = async () => {
  try {
  } catch (error) {
  }
}

//Funcion para Obtener pokemon por ID

const getPokemon = async (id: string) => {
  try {
  } catch (error) {
  }

}

//Funcion para editar pokemon

const updatePokemon = async (id: string) => {
  try {
  } catch (error) {
  }
}

//Funcion para eliminar pokemon

const deletePokemon = async (id: string) => {
  try {
  } catch (error) {
  }
}



connectDB()
