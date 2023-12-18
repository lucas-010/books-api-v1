import { Request, Response } from "express";
import AuthorController from "../../controllers/AuthorController";
import Id from "../../types/Id";

const authorController = new AuthorController();

async function updateAuthor(req: Request<Id>, res: Response) {
	await authorController.update(req, res);
}

export default updateAuthor;
