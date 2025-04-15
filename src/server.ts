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
  res.status(404).json({ 
    message: "Endpoint not found",
    suggestion: "Check the URL or go to Home" });
});


app.get("/", (req, res) => {
  res.send("Challenge Generator API is runnig! 🚀");
});


// Função assíncrona para inicialização

async function createAdminIfNotExists(adminEmail: string, adminPassword: string) {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(adminPassword, salt);

  await prisma.user.create({
    data: {
      firstName: "Admin",
      lastName: "User",
      email: adminEmail,
      passwordHash,
      isAdmin: true, 
    },
  });

  console.log(`✅ Admin user created: ${adminEmail}`);
};

async function ensureAdminExists(/* params:type */) {
  const existingAdmin = await prisma.user.findFirst({where: {isAdmin: true}});
  if (!existingAdmin) {
    await createAdminIfNotExists("admin@example.com", "admin123"); 
  }  
}


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







// another art to write the code above - no cleancode
/* async function createAdminIfNotExists() {
  const adminEmail = "admin@example.com";
  const adminPassword = "admin124";

  const existingAdmin = await prisma.user.findFirst({
    where: {isAdmin: true}
  });

  
  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(adminPassword, salt);

    await prisma.user.create({
      data: {
        firstName: "Admin",
        lastName: "User",
        email: adminEmail,
        passwordHash,
        isAdmin: true, 
      },
    });
    console.log(`✅ Admin user created: ${adminEmail}`);
  } else{
    console.log("✅ An Admin user already exists.");
  } 
};

createAdminIfNotExists()
.catch((error) => {
  console.log("❌ Error ensuring admin user:", error)
}) */