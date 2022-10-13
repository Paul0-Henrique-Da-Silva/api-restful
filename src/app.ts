import express from "express";
require('dotenv').config();

const app = express()
const PORT = process.env.API_PORT

app.use(express.json())

//db
import db from "./db/db"

app.listen(PORT, async () => {
    await db()
    console.log(`localhost:${PORT}`)
})
