import IAuthor from "../../../entities/Author/IAuthor";
import IBook from "../../../entities/Book/IBook";
import IUser from "../../../entities/User/IUser";

declare module "knex/types/tables" {
	interface Tables {
		user: IUser;
		author: IAuthor;
		book: IBook;
	}
}
