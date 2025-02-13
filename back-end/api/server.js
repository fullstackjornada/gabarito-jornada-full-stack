import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());
// middleware

app.get("/", (request, response) => {
  response.send('Só criamos o endpoint "/artists" até agora');
});

app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});

// POST - Criar, GET - Pegar,  PUT - Atualizar, Delete - Deletar
// CRUD - Create Read Update Delete

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
