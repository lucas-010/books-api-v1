import Author from "../entities/Author/Author";
import BaseRepository from "./BaseRepository";

class AuthorRepository extends BaseRepository<Author> {
	constructor() {
		super("author");
	}

	mapToDatabaseObject(item: Author): Record<string, any> {
		return {
			id: item.id,
			name: item.name,
		};
	}
}

export default AuthorRepository;
