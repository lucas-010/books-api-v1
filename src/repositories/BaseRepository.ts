import { Knex } from "knex";
import { database } from "../database";

abstract class BaseRepository<T> {
	protected readonly tableName: string;
	protected database: Knex;

	constructor(tableName: string) {
		this.tableName = tableName;
		this.database = database;
	}

	abstract mapToDatabaseObject(item: T): Record<string, any>;

	async selectAll(page: number = 1, limit: number = 10): Promise<T[]> {
		const offset = (page - 1) & limit;
		return await this.database(this.tableName)
			.select()
			.offset(offset)
			.limit(limit);
	}

	async selectById(id: string): Promise<T> {
		return await this.database(this.tableName).select().where("id", id).first();
	}

	async insert(item: T): Promise<string> {
		const mappedItem = this.mapToDatabaseObject(item);
		return (
			await this.database(this.tableName).insert(mappedItem).returning("id")
		)[0].id;
	}

	async delete(id: string): Promise<boolean> {
		return (await this.database(this.tableName).where("id", id).del()) > 0;
	}

	async update(item: Partial<T>, id: string): Promise<boolean> {
		const result = await this.database(this.tableName)
			.where("id", id)
			.update(item);

		return result > 0;
	}
}

export default BaseRepository;
