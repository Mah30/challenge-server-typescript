"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
/* import jwt from "jsonwebtoken"; */
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Challenge Generator API is runnig! 🚀");
});
//Routes
//app.use("/auth", authRoutes); //Router ou Routes??
//app.use("/api", router);
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
