import {Response, Request} from "express"
import { MovieModel } from "../models/Movie"

import Logger from "../helpers/logger"

export async function createMovie(request: Request, response: Response) {
    try {
        const data = request.body
        const movie = await MovieModel.create(data)
        return response.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no sistema:${e.message}`)
    }
}
