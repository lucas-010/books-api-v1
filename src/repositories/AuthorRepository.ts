import Author from "../entities/Author/Author";
import BaseRepository from "./BaseRepository";

class AuthorRepository extends BaseRepository<Author> {
	constructor() {
		super("author");
	}
}

export default AuthorRepository;
