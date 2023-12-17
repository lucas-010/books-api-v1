import Book from "../../entities/Book/Book";
import BookService from "../../services/BookService";
import BaseController from "./BaseController";

class BookController extends BaseController<Book, BookService> {
	constructor() {
		super(new BookService());
	}
}

export default BookController;
