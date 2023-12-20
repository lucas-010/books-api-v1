import { param } from "express-validator";

const validationId = [
	param("id").isUUID().withMessage("Deve ser um UUID válido"),
];

export default validationId;
