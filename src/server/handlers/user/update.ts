import { Request, Response } from "express";
import UserController from "../../controllers/UserController";
import Id from "../../types/Id";

const userController = new UserController();

async function updateUser(req: Request<Id>, res: Response) {
	await userController.update(req, res);
}

export default updateUser;
