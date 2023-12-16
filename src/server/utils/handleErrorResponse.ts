import { Response } from "express";

function handleError(res: Response, status: number, message: string) {
	return res.status(status).json({ error: message });
}

export default handleError;
