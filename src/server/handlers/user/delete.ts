import { Request, Response } from "express";
import UserController from "../../controllers/UserController";
import Id from "../../types/Id";

const userController = new UserController();

async function deleteUser(req: Request<Id>, res: Response) {
	await userController.delete(req, res);
}

export default deleteUser;
