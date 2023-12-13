import Book from "../entities/Book/Book";
import IBook from "../entities/Book/IBook";
import BookRepository from "../repositories/BookRepository";
import BaseService from "./BaseService";

class BookService extends BaseService<Book, BookRepository> {
	constructor() {
		super(new BookRepository());
	}

	async create(item: Omit<IBook, "id">): Promise<string> {
		const book = new Book(
			item.title,
			item.pages,
			item.imgUrl,
			item.description,
			item.authorId,
		);
		return await this.repository.insert(book);
	}

	async update(item: Partial<IBook>, id: string): Promise<boolean> {
		return await this.repository.update(item, id);
	}
}

export default BookService;
