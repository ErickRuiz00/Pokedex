import { Router } from "express";
import { fetchPokemons, addNewPokemon, getMyPokemons, deletePokemon } from "../controllers/pokemon.controller.js";
const router = Router();

router.get("/", fetchPokemons);

router.post("/stock", addNewPokemon)
router.get("/stock", getMyPokemons)
router.delete("/stock/:id", deletePokemon)

export default router;
