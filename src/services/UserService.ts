import IUser from "../entities/User/IUser";
import User from "../entities/User/User";
import UserRepository from "../repositories/UserRepository";
import hashPassword from "../utils/hashPassword";
import BaseService from "./BaseService";

class UserService extends BaseService<User, UserRepository> {
	constructor() {
		super(new UserRepository());
	}

	async create(item: Omit<IUser, "id">): Promise<string> {
		const hashedPassword = await hashPassword(item.password);
		const user = new User(item.name, item.email, hashedPassword);
		return await this.repository.insert(user);
	}

	async update(item: Partial<IUser>, id: string): Promise<boolean> {
		return await this.repository.update(item, id);
	}

	async selectByEmail(email: string): Promise<User> {
		return await this.repository.selectByEmail(email);
	}
}

export default UserService;
