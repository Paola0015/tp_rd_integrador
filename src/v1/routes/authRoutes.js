import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Login endpoint
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await User.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { userId: user.id, perfil: user.perfil },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, perfil: user.perfil });
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

export { router as authRouter };
