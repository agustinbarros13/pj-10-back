import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7215;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Servir imágenes

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch((error) => console.error("❌ Error conectando a MongoDB:", error));

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("Backend corriendo correctamente 🚀");
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
