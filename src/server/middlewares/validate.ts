import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";

function validate(
	req: Request<any, any, any, any>,
	res: Response,
	next: NextFunction,
) {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() });
	next();
}

export default validate;
