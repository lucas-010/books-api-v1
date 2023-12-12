import User from "../entities/User/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<User> {
	constructor() {
		super("user");
	}

	async selectByEmail(email: string): Promise<User> {
		return await this.database(this.tableName)
			.select()
			.where("email", email)
			.first();
	}
}

export default UserRepository;
