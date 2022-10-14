import express from "express";
require('dotenv').config();

const app = express()
const PORT = process.env.API_PORT

app.use(express.json())

// db
import db from "./db/db"

// logger
import Logger from "./helpers/logger"

app.listen(PORT, async () => {
    await db()
    Logger.info(`localhost:${PORT}`)
})
