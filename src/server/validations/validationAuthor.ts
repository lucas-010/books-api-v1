import { body } from "express-validator";

const validationAuthor = [
	body("name")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isLength({ min: 2 })
		.withMessage("Deve ter no mínimo 2 caracteres")
		.isString()
		.withMessage("Deve ser uma string"),
];

export default validationAuthor;
