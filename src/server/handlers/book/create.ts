import { Request, Response } from "express";
import BookController from "../../controllers/BookController";

const bookController = new BookController();

async function createBook(req: Request, res: Response) {
	await bookController.create(req, res);
}

export default createBook;
