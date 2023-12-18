import { Request, Response } from "express";
import BookController from "../../controllers/BookController";
import PaginationOptions from "../../types/PaginationOptions";

const bookController = new BookController();

async function getAllBook(
	req: Request<object, object, object, PaginationOptions>,
	res: Response,
) {
	await bookController.getAll(req, res);
}

export default getAllBook;
