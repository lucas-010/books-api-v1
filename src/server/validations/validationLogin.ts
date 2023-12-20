import { body } from "express-validator";

const validationLogin = [
	body("email")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isString()
		.withMessage("Deve ser uma string")
		.isEmail()
		.withMessage("Deve ser um e-mail")
		.normalizeEmail()
		.withMessage("Deve ser um e-mail válido")
		.isLength({ min: 5 })
		.withMessage("Deve ter no mínimo 5 caracteres"),
	body("password")
		.notEmpty()
		.withMessage("Campo obrigatório")
		.isString()
		.withMessage("Deve ser uma string")
		.isLength({ min: 8 })
		.withMessage("Deve ter no mínimo 8 caracteres"),
];

export default validationLogin;
