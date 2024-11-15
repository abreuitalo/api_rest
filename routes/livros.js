const express = require("express");
const router = express.Router();

let livros = [];

// listar livros
router.get("/:id?", (req, res) => {
  const id = req.params.id;
  const livroExistente = livros.find((livro) => livro.id === id);
  if (!id) {
    res.json(livros);
  } else {
    if (!livroExistente) res.status(404).send("Livro não existe");
    res.json(livroExistente);
  }
});

// adicionar livro
router.post("/", (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// atualizar livro
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const index = livros.findIndex((livro) => livro.id === id);
  if (index !== -1) {
    livros[index] = req.body;
    res.json(livros[index]);
  } else {
    res.status(404).send("Livro não encontrado.");
  }
});

// remover livro
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const livroExistente = livros.find((livro) => livro.id === id);

  if (livroExistente) {
    // Remove o livro filtrando por ID
    livros = livros.filter((livro) => livro.id !== id);
    res.status(204).send();
  } else {
    res.status(404).send("Livro não encontrado");
  }
});

module.exports = router;
