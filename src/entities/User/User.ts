import IUser from "./IUser";
import { v4 as uuid } from "uuid";

class User implements IUser {
	private _id: string;
	private _name: string;
	private _email: string;
	private _password: string;

	constructor(name: string, email: string, password: string) {
		this._id = uuid();
		this._name = name;
		this._email = email;
		this._password = password;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get email() {
		return this._email;
	}

	get password() {
		return this._password;
	}
}

export default User;
