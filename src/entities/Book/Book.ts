import IBook from "./IBook";
import { v4 as uuid } from "uuid";

class Book implements IBook {
	private _id: string;
	private _title: string;
	private _pages: number;
	private _imgUrl: string;
	private _description: string;
	private _authorId: string;

	constructor(
		title: string,
		pages: number,
		imgUrl: string,
		description: string,
		authorId: string,
		id: string = uuid(),
	) {
		this._title = title;
		this._pages = pages;
		this._imgUrl = imgUrl;
		this._description = description;
		this._authorId = authorId;
		this._id = id;
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get pages() {
		return this._pages;
	}

	get imgUrl() {
		return this._imgUrl;
	}

	get description() {
		return this._description;
	}

	get authorId() {
		return this._authorId;
	}
}

export default Book;
