import { Request, Response } from "express";
import BookController from "../../controllers/BookController";
import Id from "../../types/Id";

const bookController = new BookController();

async function getByIdBook(req: Request<Id>, res: Response) {
	await bookController.getById(req, res);
}

export default getByIdBook;
