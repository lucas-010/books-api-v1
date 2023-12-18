import { Request, Response } from "express";
import UserController from "../../controllers/UserController";
import PaginationOptions from "../../types/PaginationOptions";

const userController = new UserController();

async function getAllUser(
	req: Request<object, object, object, PaginationOptions>,
	res: Response,
) {
	await userController.getAll(req, res);
}

export default getAllUser;
