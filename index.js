const express = require("express");
const server = express();
server.use(express.json());
const cursos = [
  "Sistemas para Internet",
  "Engenharia da Computação",
  "Análise e Desenvolvimento de Sistemas",
];
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});
server.listen(3010);
