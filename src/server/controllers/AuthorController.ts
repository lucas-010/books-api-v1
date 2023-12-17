import Author from "../../entities/Author/Author";
import AuthorService from "../../services/AuthorService";
import BaseController from "./BaseController";

class AuthorController extends BaseController<Author, AuthorService> {
	constructor() {
		super(new AuthorService());
	}
}

export default AuthorController;
