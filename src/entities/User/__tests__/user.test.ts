import { v4 as uuid, validate } from "uuid";
import IUser from "../IUser";
import User from "../User";

const data: IUser = {
	id: uuid(),
	name: "Username Test",
	email: "useremail@test.com",
	password: "12345678",
};

describe("User - Entity", () => {
	it("should create an instance of User", () => {
		const user: User = new User(data.name, data.email, data.password);
		expect(user).toBeInstanceOf(User);
	});

	it("should have an id as a valid UUID", () => {
		const user: User = new User(data.name, data.email, data.password);
		expect(validate(user.id)).toEqual(true);
	});

	it("should have a name equivalent to the passed value", () => {
		const user: User = new User(data.name, data.email, data.password);
		expect(data.name).toEqual(user.name);
	});

	it("should have a email equivalent to the passed value", () => {
		const user: User = new User(data.name, data.email, data.password);
		expect(data.email).toEqual(user.email);
	});

	it("should have a password equivalent to the passed value", () => {
		const user: User = new User(data.name, data.email, data.password);
		expect(data.password).toEqual(user.password);
	});

	it("should have a id equivalent to the passed value", () => {
		const user: User = new User(data.name, data.email, data.password, data.id);
		expect(data.id).toEqual(user.id);
	});
});
