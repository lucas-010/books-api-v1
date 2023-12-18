import { Request, Response } from "express";
import BookController from "../../controllers/BookController";
import Id from "../../types/Id";

const bookController = new BookController();

async function deleteBook(req: Request<Id>, res: Response) {
	await bookController.delete(req, res);
}

export default deleteBook;
