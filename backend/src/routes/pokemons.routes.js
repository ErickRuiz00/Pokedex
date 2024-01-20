import { Router } from "express";
import {
  fetchPokemons,
  addNewPokemon,
  getMyPokemons,
  deletePokemon,
  findPokemon,
} from "../controllers/pokemon.controller.js";
const router = Router();

router.get("/", fetchPokemons);
router.get("/stock", getMyPokemons);
router.post("/stock", addNewPokemon);

router.post("/:name", findPokemon);
router.delete("/stock/:id", deletePokemon);

export default router;
