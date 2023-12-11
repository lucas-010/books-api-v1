import IAuthor from "./IAuthor";
import { v4 as uuid } from "uuid";

class Author implements IAuthor {
	private _id: string;
	private _name: string;

	constructor(name: string, id: string = uuid()) {
		this._id = id;
		this._name = name;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}
}

export default Author;
