import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors';

const app = express()
app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import useRouter from "./routes/user.routes.js"

// routes declaration
app.use("/api/v1/users", useRouter)
export default app;
