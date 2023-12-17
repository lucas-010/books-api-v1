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

	mapToDatabaseObject(item: User): Record<string, any> {
		return {
			id: item.id,
			name: item.name,
			email: item.email,
			password: item.password,
		};
	}
}

export default UserRepository;
