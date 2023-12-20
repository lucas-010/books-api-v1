import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../../../services/UserService";
import comparePassword from "../../../utils/comparePassword";
import jwtSign from "../../../utils/jwtSign";

const userService = new UserService();

async function handleLogin(req: Request, res: Response) {
	const { email, password } = req.body;
	const result = await userService.selectByEmail(email);
	if (!result)
		return res
			.status(StatusCodes.BAD_REQUEST)
			.json({ message: "Email inexistente" });
	if (await comparePassword(password, result.password)) {
		return res.status(StatusCodes.OK).json(jwtSign(result.id));
	}
	return res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.json({ error: "Ocorreu um erro interno" });
}

export default handleLogin;
