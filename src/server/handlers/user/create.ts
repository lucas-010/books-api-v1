import { Request, Response } from "express";
import UserController from "../../controllers/UserController";

const userController = new UserController();

async function createUser(req: Request, res: Response) {
	await userController.create(req, res);
}

export default createUser;
