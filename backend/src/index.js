import express from "express";
import cors from "cors";
import pokemonRoutes from './routes/pokemons.routes.js'
import connectDB from './db.js'
import morgan from 'morgan'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

app.use("/api",pokemonRoutes);
connectDB();
app.listen(3001);
console.log("Server listening in port 3001");
