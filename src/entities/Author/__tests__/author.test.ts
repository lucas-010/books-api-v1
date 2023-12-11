import { v4 as uuid, validate } from "uuid";
import IAuthor from "../IAuthor";
import Author from "../Author";

const data: IAuthor = {
	id: uuid(),
	name: "Username Test",
};

describe("Author - Entity", () => {
	it("should create an instance of Author", () => {
		const author: Author = new Author(data.name);
		expect(author).toBeInstanceOf(Author);
	});

	it("should have an id as a valid UUID", () => {
		const author: Author = new Author(data.name);
		expect(validate(author.id)).toEqual(true);
	});

	it("should have a name equivalent to the passed value", () => {
		const author: Author = new Author(data.name);
		expect(data.name).toEqual(author.name);
	});

	it("should have a id equivalent to the passed value", () => {
		const author: Author = new Author(data.name, data.id);
		expect(data.id).toEqual(author.id);
	});
});
