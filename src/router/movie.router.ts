import { Router } from "express"
import { createMovie, getById } from "../controller/movie.controller"
import { validate } from "../middleware/validation"
import { movieCreateValidation } from "../middleware/validationMovie"


const router = Router()

router.get("/movie/:id", getById)
router.post("/movie", movieCreateValidation(), validate, createMovie)

export default router
