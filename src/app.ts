import express from "express";
require('dotenv').config();

const app = express()
const PORT = process.env.API_PORT

app.use(express.json())

app.listen(PORT, async () => {
    console.log(`localhost:${PORT}`)
})
