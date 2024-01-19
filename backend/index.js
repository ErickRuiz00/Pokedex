import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.listen(3001);

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const limit = req.params;
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=1032&offset=0"
    );
    const { results } = response.data;
    results.sort((a, b) => a.name.localeCompare(b.name));
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succes: false,
      message: "Error en la petición",
    });
  }
});

console.log("server listening in port 3001");
