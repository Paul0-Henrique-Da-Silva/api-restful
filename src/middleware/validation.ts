import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const validate = (request: Request, response: Response, next: NextFunction) =>  {
    const errors =  validationResult(request)
    if (errors.isEmpty()) { return next() }

    const extractectErrors: object[] = [];

    errors.array().map((value) => extractectErrors.push({ [value.param]: value.msg }))

    return response.status(422).json({ errors: extractectErrors})  
}
