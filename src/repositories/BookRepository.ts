import Book from "../entities/Book/Book";
import BaseRepository from "./BaseRepository";

class BookRepository extends BaseRepository<Book> {
	constructor() {
		super("book");
	}
}

export default BookRepository;
