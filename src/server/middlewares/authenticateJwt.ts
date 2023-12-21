import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import verifyJwt from "../../utils/verifyJwt";

function authenticateJwt(
	req: Request<any, any, any, any>,
	res: Response,
	next: NextFunction,
) {
	const token = req.headers["authorization"]?.split(" ")[1];
	if (!token)
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ message: "Token de acesso é requerido" });
	const verify = verifyJwt(token);
	if (typeof verify === "string")
		return res
			.status(StatusCodes.FORBIDDEN)
			.json({ message: "Token inválido" });
	next();
}

export default authenticateJwt;
