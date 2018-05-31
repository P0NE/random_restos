const mongoose = require("mongoose");
const Restos = mongoose.model("Restos");

async function getRestos() {
  return Restos.find().then(restos => ({
    restos: restos.map(resto => resto.toJSON())
  }));
}

async function postRestos(body) {
  const finalResto = new Restos(body);
  const result = await finalResto.save();
  return result;
}

async function deleteRestos(id) {
  return Restos.findByIdAndRemove(id).then(() => ({ resto: "resto supprimé" }));
}

async function randomRestos() {
  const listRestos = await Restos.find();
  return listRestos[(Math.random() * listRestos.length) | 0];
}

module.exports = { getRestos, postRestos, deleteRestos, randomRestos };
