import Author from "../entities/Author/Author";
import IAuthor from "../entities/Author/IAuthor";
import AuthorRepository from "../repositories/AuthorRepository";
import BaseService from "./BaseService";

class AuthorService extends BaseService<Author, AuthorRepository> {
	constructor() {
		super(new AuthorRepository());
	}

	async create(item: Omit<IAuthor, "id">): Promise<string> {
		const author = new Author(item.name);
		return await this.repository.insert(author);
	}

	async update(item: Partial<IAuthor>, id: string): Promise<boolean> {
		return await this.repository.update(item, id);
	}
}

export default AuthorService;
