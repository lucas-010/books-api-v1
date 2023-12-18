import { body } from "express-validator";

const validationBook = [
	body("title")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isString()
		.withMessage("Deve ser uma string")
		.isLength({ min: 2 })
		.withMessage("Deve ter no mínimo 2 caracteres"),
	body("pages")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isInt({ min: 1 })
		.withMessage("O valor mínimo é 1")
		.withMessage("Deve ser um número inteiro"),
	body("imgUrl")
		.isString()
		.withMessage("Deve ser uma string")
		.isLength({ max: 255 })
		.withMessage("O máximo é 255 caracteres"),
	body("description")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isString()
		.withMessage("Deve ser uma string")
		.isLength({ min: 10 })
		.withMessage("Deve ter no mínimo 10 caracteres"),
	body("authorId")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isUUID()
		.withMessage("Deve ser um UUID válido"),
];

export default validationBook;
