import { query } from "express-validator";

const validationPaginationOptions = [
	query("page").optional().isInt().withMessage("Deve ser um número inteiro"),
	query("limit").optional().isInt().withMessage("Deve ser um número inteiro"),
];

export default validationPaginationOptions;
