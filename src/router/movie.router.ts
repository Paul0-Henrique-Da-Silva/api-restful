import { Router, Request, Response } from "express"
import { createMovie } from "../controller/movie.controller"

const router = Router()


router.post("/movie", createMovie)



export default router
