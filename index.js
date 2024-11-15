const express = require("express");
const app = express();
const PORT = 3000;

// middleware para interpretar JSON
app.use(express.json());

// routes
const livrosRouter = require("./routes/livros");
app.use("/livros", livrosRouter);

app.get("/", (req, res) => {
  res.send("API REST está funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`http://localhost:3000`);
});
