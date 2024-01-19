import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  base_stat: {
    type: Number,
  },
  name: {
    type: String,
  },
});

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  type: [String],
  url_img: {
    type: String,
  },
  abilities: [String],
  stats: [statSchema],
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  nickname: {
    type: String,
    trim: true,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

export default Pokemon;
