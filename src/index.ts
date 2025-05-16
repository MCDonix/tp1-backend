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

interface IPokemon {
  ncard: number
  name: string
  ps: number
  hability: string

}

const pokemonSchema = new Schema({
  ncard: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  ps: { type: Number, required: true },
  hability: { type: String, required: true },
}, { versionKey: false })

const Pokemon = model("Pokemon", pokemonSchema)

//Funcion para agregar pokemon

const addNewPokemon = async (newPokemon: IPokemon) => {
  try {
    const { ncard, name, ps, hability } = newPokemon
    if (!ncard || !name || !ps || !hability) {
      return { succes: false, error: "invalid data" }
    }
    const newFileToDb = new Pokemon({ ncard, name, ps, hability })
    await newFileToDb.save()
    return {
      succes: true,
      data: newFileToDb,
      message: "Pokemon added "
    }
  } catch (error: any) {
    return { success: false, error: error.message }
  }
}

//Funcion para obtener lista de pokemones agregados

const getAllPokemon = async () => {
  try {
    const allPokemon = await Pokemon.find()
    return {
      success: true,
      data: allPokemon,
      message: "list of all pokemon"
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

//Funcion para Obtener pokemon por ID

const getPokemon = async (id: string) => {
  try {
    const foundPokemon = await Pokemon.findById(id)
    if (!foundPokemon) {
      return {

        success: false,
        message: "pokemon does not exist"
      }
    }
    return {
      success: true,
      data: foundPokemon,
      message: "pokemon found"
    }

  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }

}

//Funcion para editar pokemon

const updatePokemon = async (id: string, newData: Partial<IPokemon>) => {
  try {
    const updatePokemon = await Pokemon.findByIdAndUpdate(id, newData, { new: true })
    if (!updatePokemon)
      return { success: false, message: "pokemon does not exist" }
    return {
      success: true,
      data: updatePokemon,
      message: "edited pokemon"
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message
    }
  }
}

//Funcion para eliminar pokemon

const deletePokemon = async (id: string) => {
  try {

    const deletePokemon = await Pokemon.findByIdAndDelete(id)
    if (!deletePokemon) return { success: false, message: "Pokemon not found" }
    return {
      success: true,
      data: deletePokemon,
      message: "Pokemon delete"
    }
  } catch (error) {
  }
}

const main = async () => {
  connectDB()

  //const savedPokemon = await addNewPokemon({ ncard: 11, name: "Charizard", ps: 150, hability: "Quema Energia" })

  //const allPokemon = await getAllPokemon()

  //const Pokemon = await getPokemon("68256caab6438017cfdb5f4b")

  //const updatedPokemon = await updatePokemon("68256caab6438017cfdb5f4b", { hability: "lanza llamas" })

  console.log(allPokemon)
}

main()


