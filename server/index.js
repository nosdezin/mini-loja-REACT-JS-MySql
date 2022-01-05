const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: null,
  database: "lojabanco",
});

app.use(cors());
app.use(express.json());

app.get("/getProdutos", (req, res) => {
  let SQL = "SELECT * FROM produtos";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/makeProdutos", (req, res) => {
  const { nome } = req.body;
  const { preço } = req.body;
  const { tipo } = req.body;
  const { img } = req.body;

  let SQL = "INSERT INTO produtos (nome,preço,tipo,img) VALUES (?,?,?,?)";

  db.query(SQL, [nome, preço, tipo, img], (err, result) => {
    console.log(err);
  });
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001: http://localhost:3001");
});
