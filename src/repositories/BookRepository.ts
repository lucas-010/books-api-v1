import Book from "../entities/Book/Book";
import BaseRepository from "./BaseRepository";

class BookRepository extends BaseRepository<Book> {
	constructor() {
		super("book");
	}

	mapToDatabaseObject(item: Book): Record<string, any> {
		return {
			id: item.id,
			title: item.title,
			pages: item.pages,
			description: item.description,
			imgUrl: item.imgUrl,
			authorId: item.authorId,
		};
	}
}

export default BookRepository;
