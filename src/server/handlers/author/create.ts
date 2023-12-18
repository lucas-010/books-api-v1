import { Request, Response } from "express";
import AuthorController from "../../controllers/AuthorController";

const authorController = new AuthorController();

async function createAuthor(req: Request, res: Response) {
	await authorController.create(req, res);
}

export default createAuthor;
