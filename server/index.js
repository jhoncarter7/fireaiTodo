import express from "express";
import dotenv from "dotenv";
import { mongodbConnection } from "./db/index.js";
import userRoutes from "./Routes/user.route.js";
import todoRoutes from "./Routes/todo.route.js";
import cookieParser from "cookie-parser";
import path from "path";


const app = express();
app.use(cookieParser());
app.use(express.json());
dotenv.config({ path: "./.env" });
mongodbConnection()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Error in connecting to MongoDB", error);
    process.exit();
  });

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/todo", todoRoutes);


const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
