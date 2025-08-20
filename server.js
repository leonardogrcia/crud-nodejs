import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao criar usuário", error: error.message });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Usuário não encontrado", error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).json({ message: "Lista de usuários", users: allUsers });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar usuários", error: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ message: "Usuário deletado com sucesso", user: deletedUser });
  } catch (error) {
    res
      .status(404)
      .json({ message: "Usuário não encontrado", error: error.message });
  }
});

app.listen(3010, () => {
  console.log("Servidor rodando na porta 3010");
});
