import { Response, Request } from "express"
import { MovieModel } from "../models/Movie"

import Logger from "../helpers/logger"


export async function getById(request: Request, response: Response) {
  try {
    const id = request.params.id
    const movie = await MovieModel.findById(id)
    if(!movie) {
      return response.status(404).json({message: "Não há filme com este id"})
    }
    return response.status(200).json(movie)  
  } catch (e: any) {
    Logger.error(`Erro no sistema:${e.message}`)
    return response.status(500).json({message: "Por favor, tente mais tarde!"}) 
  }
}

export async function getAll(_request: Request, response: Response) {
  try {
    const movie = await MovieModel.find()
    return response.status(200).json(movie)
  } catch (e: any) {
    Logger.error(`Erro no sistema:${e.message}`) 
    return response.status(500).json({message: "Por favor, tente mais tarde!"})
  }
}

export async function createMovie(request: Request, response: Response) {
    try {
      const data = request.body
      const movie = await MovieModel.create(data)
      return response.status(201).json(movie)
    } catch (e: any) {
      Logger.error(`Erro no sistema:${e.message}`)
      return response.status(500).json({message: "Por favor, tente mais tarde!"})
    }
}

export async function remove( request: Request, response: Response) {
    try {
      const id = request.params.id
      const movie = await MovieModel.findById(id)
      if(!movie) {
        return response.status(400).json({message: "O filme não existe"})
      }
      await movie.delete()
      return response.status(200).json({message: "Filme removido com sucesso!"})
    } catch (e: any) {
      Logger.error(`Erro no sistema:${e.message}`)
      return response.status(500).json({message: "Por favor, tente mais tarde!"})
    }
  
}