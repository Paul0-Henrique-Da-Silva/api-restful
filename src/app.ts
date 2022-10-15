import express from "express";
require('dotenv').config();

const app = express()
const PORT = process.env.API_PORT

app.use(express.json())

// db
import db from "./db/db"

// logger
import Logger from "./helpers/logger"


// middleware
import morganMiddleware from "./middleware/morgan";

//router
import movie from "./router/movie.router"

app.use(morganMiddleware)

app.use('/api/', movie)


app.listen(PORT, async () => {
    await db()
    Logger.info(`localhost:${PORT}`)
})
