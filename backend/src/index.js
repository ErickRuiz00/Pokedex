import express from "express";
import cors from "cors";
import pokemonRoutes from './routes/pokemons.routes.js'

const app = express();

app.use(cors());
app.use(pokemonRoutes)

app.listen(3001);
console.log("Server listening in port 3001");
