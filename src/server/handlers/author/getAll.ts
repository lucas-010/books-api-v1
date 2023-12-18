import { Request, Response } from "express";
import AuthorController from "../../controllers/AuthorController";
import PaginationOptions from "../../types/PaginationOptions";

const authorController = new AuthorController();

async function getAllAuthor(
	req: Request<object, object, object, PaginationOptions>,
	res: Response,
) {
	await authorController.getAll(req, res);
}

export default getAllAuthor;
