import { Request, Response } from "express";
import BaseRepository from "../../repositories/BaseRepository";
import BaseService from "../../services/BaseService";
import PaginationOptions from "../types/PaginationOptions";
import { StatusCodes } from "http-status-codes";
import handleError from "../utils/handleErrorResponse";
import Id from "../types/Id";

abstract class BaseController<T, S extends BaseService<T, BaseRepository<T>>> {
	protected service: S;

	constructor(service: S) {
		this.service = service;
	}

	async getAll(
		req: Request<object, object, object, PaginationOptions>,
		res: Response,
	): Promise<Response> {
		try {
			const { page = 1, limit = 10 } = req.query;

			const result = await this.service.selectAll(page, limit);

			return result.length < 1
				? handleError(res, StatusCodes.NOT_FOUND, "Nenhum item encontrado")
				: res.status(StatusCodes.OK).json(result);
		} catch (error) {
			return handleError(
				res,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Ocorreu um erro internamente",
			);
		}
	}

	async getById(req: Request<Id>, res: Response) {
		try {
			const result = await this.service.selectById(req.params.id);

			return result
				? res.status(StatusCodes.OK).json(result)
				: handleError(res, StatusCodes.NOT_FOUND, "Nenhum item encontrado");
		} catch (error) {
			return handleError(
				res,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Ocorreu um erro internamente",
			);
		}
	}

	async delete(req: Request<Id>, res: Response) {
		try {
			const result = await this.service.delete(req.params.id);

			return result
				? res.status(StatusCodes.OK).json(result)
				: handleError(res, StatusCodes.NOT_FOUND, "Nenhum item encontrado");
		} catch (error) {
			return handleError(
				res,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Ocorreu um erro internamente",
			);
		}
	}

	async create(req: Request, res: Response) {
		try {
			const result = await this.service.create(req.body);

			return result
				? res.status(StatusCodes.CREATED).json({ id: result })
				: handleError(res, StatusCodes.BAD_REQUEST, "Não foi possível criar");
		} catch (error) {
			console.log(error);
			return handleError(
				res,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Ocorreu um erro internamente",
			);
		}
	}

	async update(req: Request<Id>, res: Response) {
		try {
			const result = await this.service.update(req.body, req.params.id);

			return result
				? res.status(StatusCodes.OK).json(result)
				: handleError(res, StatusCodes.BAD_REQUEST, "Erro ao atualizar");
		} catch (error) {
			return handleError(
				res,
				StatusCodes.INTERNAL_SERVER_ERROR,
				"Ocorreu um erro internamente",
			);
		}
	}
}

export default BaseController;
