import BaseRepository from "../repositories/BaseRepository";

abstract class BaseService<T, R extends BaseRepository<T>> {
	protected repository: R;

	constructor(repository: R) {
		this.repository = repository;
	}

	async selectAll(page: number, limit: number): Promise<T[]> {
		return await this.repository.selectAll(page, limit);
	}

	async selectById(id: string): Promise<T> {
		return await this.repository.selectById(id);
	}

	abstract create(item: T): Promise<string>;

	abstract update(item: Partial<T>, id: string): Promise<boolean>;

	async delete(id: string): Promise<boolean> {
		return await this.repository.delete(id);
	}
}

export default BaseService;
