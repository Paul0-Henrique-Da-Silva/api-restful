import { Router } from "express"
import { createMovie, getAll, getById } from "../controller/movie.controller"
import { validate } from "../middleware/validation"
import { movieCreateValidation } from "../middleware/validationMovie"


const router = Router()

router.get("/movie/:id", getById)
router.get("/movie", getAll)
router.post("/movie", movieCreateValidation(), validate, createMovie)

export default router
