import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./db";
import bcrypt from "bcrypt";

/* import jwt from "jsonwebtoken"; */

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Challenge Generator API is runnig! 🚀");
});


//Routes
//app.use("/auth", authRoutes); //Router ou Routes??
//app.use("/api", router);
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});




// Função assíncrona para inicialização

/* async function main() {
  try {
    // Criar um usuário de exemplo
    const user = await prisma.user.create({
      data: {
        username: "admin",
        password: await bcrypt.hash("admin", 10),
      },
  
    }); */

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


