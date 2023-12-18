import { Request, Response } from "express";
import BookController from "../../controllers/BookController";
import Id from "../../types/Id";

const bookController = new BookController();

async function updateBook(req: Request<Id>, res: Response) {
	await bookController.update(req, res);
}

export default updateBook;
