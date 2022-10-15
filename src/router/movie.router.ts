import { Router, Request, Response } from "express"
import { createMovie } from "../controller/movie.controller"
import { validate } from "../middleware/validation"
import { movieCreateValidation } from "../middleware/validationMovie"


const router = Router()

router.post("/movie", movieCreateValidation(), validate, createMovie)

export default router
