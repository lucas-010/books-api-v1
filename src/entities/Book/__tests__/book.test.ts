import { v4 as uuid, validate } from "uuid";
import IBook from "../IBook";
import Book from "../Book";

const data: IBook = {
	id: uuid(),
	title: "Book Title Test",
	description: "Book Description",
	imgUrl: "http://bookimageurl.com/image.jpg",
	authorId: uuid(),
	pages: 100,
};

describe("Book - Entity", () => {
	it("should create an instance of Book", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(book).toBeInstanceOf(Book);
	});

	it("should have an id as a valid UUID", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(validate(book.id)).toEqual(true);
	});

	it("should have a title equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(data.title).toEqual(book.title);
	});

	it("should have a pages number equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(data.pages).toEqual(book.pages);
	});

	it("should have a img url equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(data.imgUrl).toEqual(book.imgUrl);
	});

	it("should have a description equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(data.description).toEqual(book.description);
	});

	it("should have a author id equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(data.authorId).toEqual(book.authorId);
	});

	it("should have an author id as a valid UUID", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
		);
		expect(validate(book.authorId)).toEqual(true);
	});

	it("should have a id equivalent to the passed value", () => {
		const book: Book = new Book(
			data.title,
			data.pages,
			data.imgUrl,
			data.description,
			data.authorId,
			data.id,
		);
		expect(data.id).toEqual(book.id);
	});
});
