import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma from "./db";
import bcrypt from "bcrypt";
/* import authRouter from "";
import router from ""; */

/* import jwt from "jsonwebtoken"; */

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// Aqui define a configuração segura do CORS
const corsOptions = {
  origin: "process.env.FRONTEND_URL", // botar o netlify aqui
  credentials: true,
}
// Middlewares
app.use(cors(corsOptions));
app.use(express.json());


//Routes
//app.use("/auth", authRouter); //Router ou Routes??
//app.use("/api", router);
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.get("/", (req, res) => {
  res.send("Challenge Generator API is runnig! 🚀");
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


