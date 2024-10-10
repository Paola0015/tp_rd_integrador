import express from "express";
import connection from "../db/connection.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await connection.query("SELECT * FROM usuarios");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).send("Error al obtener usuarios");
  }
});

router.post("/", async (req, res) => {
  const { nombre, email } = req.body;
  try {
    const [result] = await connection.query(
      "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
      [nombre, email]
    );
    res.status(201).json({ id: result.insertId, nombre, email });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).send("Error al crear usuario");
  }
});

export default router;
