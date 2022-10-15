import { body } from "express-validator"
 
export const movieCreateValidation = () => {
    return[
        body("title")
          .isString().withMessage("Digite um título")
          .isLength({min: 5}).withMessage("Minino de 5 caracteres"),
        body("rating")
          .isNumeric().withMessage("Digite um numero.")
          .custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error("A nota precisa ser entre 0  a 10")
                }
            return true
          }),
        body("description").isString()
          .withMessage("A descrição é obrigatória."),
        body("director").isString()
          .withMessage("Digite o nome do diretor."),
        body("poster").isURL()
          .withMessage("A imagem precisa ser uma URl")        
    ]
}