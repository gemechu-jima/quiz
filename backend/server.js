import express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import path from "path";
import { fileURLToPath } from 'url';
import fs from "fs"
import "express-async-errors"
import connect from "./db/config.js";
import routerReact from "./routes/routesReact.js";
import routerUser from "./routes/routesUser.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
connect()
dotenv.config()

const app=express()
const node_env=process.env.NODE_ENV
const port=process.env.PORT 

app.use(express.json())
app.use(cors())


if(node_env==="development"){
app.use(morgan("dev"))

}
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, PUT"
    );
    next();
  });
  app.use(
    "/upload",
    express.static(path.join(__dirname, "upload"))
  );
  app.use(express.static(path.resolve(__dirname, "../Client/build")))
app.use("/quiz",routerReact)
app.use("/user", routerUser)


app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "../Client/build", "index.html"))
})
app.use("*", ( req, res)=>{
  res.status(404).json({ message: "Not Found" });
})
app.use((err, req, res, next)=>{
  if (req.file) {
    fs.unlink(req.file.path);
  }
  if (res.headerSent) {
    return next(err);
  }
  console.log(err);
  res.status(500).json({ message: err.message || "Internal server error" });
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})

