import { Router } from "express"
import { createMovie, getAll, getById, remove } from "../controller/movie.controller"
import { validate } from "../middleware/validation"
import { movieCreateValidation } from "../middleware/validationMovie"


const router = Router()

router.get("/movie/:id", getById)
router.get("/movie", getAll)
router.post("/movie", movieCreateValidation(), validate, createMovie)
router.delete("/movie/:id", remove)

export default router
