import { Router } from "express";
import { fetchPokemons } from "../controllers/pokemon.controller.js";
const router = Router();

router.get("/", fetchPokemons);

export default router;
