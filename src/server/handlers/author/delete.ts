import { Request, Response } from "express";
import AuthorController from "../../controllers/AuthorController";
import Id from "../../types/Id";

const authorController = new AuthorController();

async function deleteAuthor(req: Request<Id>, res: Response) {
	await authorController.delete(req, res);
}

export default deleteAuthor;
