# 📦 Pokémon Manager con Mongoose

Este proyecto permite gestionar una colección de Pokémon en una base de datos MongoDB utilizando Mongoose. Incluye funciones para **agregar**, **obtener**, **editar** y **eliminar** Pokémon.

## 🛠️ Requisitos

- Node.js
- MongoDB (local o Atlas)
- Archivo `.env` con la URI de conexión

### 📄 .env

```env
URI_DB==mongodb://localhost:27017/Nombre de la BD
```

## 🚀 Instalación

```bash
npm install mongoose
```

## 📁 Estructura del Proyecto

```bash
pokemon-manager/
├── index.ts
├── .env
├── README.md
```

---

## 🧬 Esquema del Pokémon

Cada Pokémon contiene los siguientes campos:

| Campo     | Tipo    | Requerido | Único |
|-----------|---------|-----------|-------|
| ncard     | Número  | ✅         | ✅     |
| name      | String  | ✅         | ✅     |
| ps        | Número  | ✅         | ❌     |
| hability  | String  | ✅         | ❌     |

```ts
interface IPokemon {
  ncard: number
  name: string
  ps: number
  hability: string
}
```

---

## ⚙️ Funcionalidades

### 🔌 Conexión a la Base de Datos

```ts
connectDB()
```

Conecta a la base de datos utilizando `mongoose.connect`.

---

### ➕ Agregar un nuevo Pokémon

```ts
addNewPokemon({ ncard, name, ps, hability })
```

**Parámetros:** Objeto con los datos del Pokémon  
**Retorna:** Resultado de la operación (`success`, `data`, `message` o `error`)

---

### 📋 Obtener todos los Pokémon

```ts
getAllPokemon()
```

**Retorna:** Lista de todos los Pokémon almacenados.

---

### 🔍 Obtener un Pokémon por ID

```ts
getPokemon("id")
```

**Parámetro:** `id` (string - ID de MongoDB)  
**Retorna:** El Pokémon encontrado o mensaje de error.

---

### 📝 Editar un Pokémon

```ts
updatePokemon("id", { name, ps, hability })
```

**Parámetros:**

- `id`: ID del Pokémon a editar
- `newData`: Objeto con los campos a actualizar

**Retorna:** Pokémon actualizado o mensaje de error.

---

### ❌ Eliminar un Pokémon

```ts
deletePokemon("id")
```

**Parámetro:** ID del Pokémon  
**Retorna:** Pokémon eliminado o mensaje de error.

---

## 🧪 Ejemplo de Uso

```ts
const main = async () => {
  await connectDB()

  const newPoke = await addNewPokemon({
    ncard: 1,
    name: "Pikachu",
    ps: 100,
    hability: "Impactrueno"
  })

  const all = await getAllPokemon()

  const one = await getPokemon("68256caab6438017cfdb5f4b")

  const updated = await updatePokemon("68256caab6438017cfdb5f4b", {
    hability: "Rayo"
  })

  const deleted = await deletePokemon("68256caab6438017cfdb5f4b")

  console.log({ newPoke, all, one, updated, deleted })
}

main()
```

---

## 📎 Notas

- Asegúrate de tener el archivo `.env` con la variable `URI_DB`.
- Usa herramientas como [MongoDB Compass](https://www.mongodb.com/try/download/compass) para ver la base de datos gráficamente.
- Este proyecto usa TypeScript. Asegúrate de tenerlo configurado si usas compilación TS.

---

## 🧑‍💻 Autor

Desarrollado por Mauricio – ¡Feliz desarrollo con Pokémon y MongoDB!