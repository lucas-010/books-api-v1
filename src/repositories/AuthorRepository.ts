import Author from "../entities/Author/Author";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<Author> {
	constructor() {
		super("author");
	}
}

export default UserRepository;
