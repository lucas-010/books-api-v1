import { Request, Response } from "express";
import UserController from "../../controllers/UserController";
import Id from "../../types/Id";

const userController = new UserController();

async function getByIdUser(req: Request<Id>, res: Response) {
	await userController.getById(req, res);
}

export default getByIdUser;
