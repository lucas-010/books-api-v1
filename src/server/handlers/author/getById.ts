import { Request, Response } from "express";
import AuthorController from "../../controllers/AuthorController";
import Id from "../../types/Id";

const authorController = new AuthorController();

async function getByIdAuthor(req: Request<Id>, res: Response) {
	await authorController.getById(req, res);
}

export default getByIdAuthor;
