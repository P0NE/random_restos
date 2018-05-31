const restos = require("../services/restos");

const getRestos = async () => {
  return restos.getRestos();
};

const postRestos = async req => {
  console.log("coucou");
  return restos.postRestos(req.payload);
};

const deleteRestos = async req => {
  return restos.deleteRestos(req.params.id);
};

const randomRestos = async () => {
  return restos.randomRestos();
};

module.exports = { getRestos, postRestos, deleteRestos, randomRestos };
