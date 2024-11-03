import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import v1Usuarios from "./v1/routes/usuariosRoutes.js"; // Importa rutas de usuarios

// Importar middlewares
import validateContentType from "./middlewares/validateContentType.js";
import { verifyToken, verifyRole } from "./middlewares/auth.js";

// Importar otras rutas
import { router as v1ReclamosEstadoRouter } from "./v1/routes/reclamosEstadosRoutes.js";
import { router as v1ReclamosRouter } from "./v1/routes/reclamosRoutes.js";
import { authRouter } from "./v1/routes/authRoutes.js";

dotenv.config();
const PORT = process.env.PUERTO;

const app = express();

app.use(express.json());
app.use(validateContentType);

app.get("/", (req, res) => {
  res.json({ estado: true });
});

// Rutas de los EndPoints
app.use(
  "/v1/reclamos-estados",
  verifyToken,
  verifyRole(["empleado"]),
  v1ReclamosEstadoRouter
);

app.use(
  "/v1/reclamos",
  verifyToken,
  verifyRole(["cliente", "empleado"]),
  v1ReclamosRouter
);

app.use("/v1/usuarios", verifyToken, verifyRole(["admin"]), v1Usuarios);

app.use("/v1/auth", authRouter);

app.listen(PORT, () => {
  console.log(`*** Servidor escuchando en puerto: ${PORT} ***`);
});
