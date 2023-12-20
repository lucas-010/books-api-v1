import { Router } from "express";
import createAuthor from "../handlers/author/create";
import getByIdAuthor from "../handlers/author/getById";
import getAllAuthor from "../handlers/author/getAll";
import updateAuthor from "../handlers/author/update";
import deleteAuthor from "../handlers/author/delete";
import validationAuthor from "../validations/validationAuthor";
import validate from "../middlewares/validate";
import validationId from "../validations/validationId";
import validationPaginationOptions from "../validations/validationPaginationOptions";

const authorRouter = Router();

authorRouter.post("/", validationAuthor, validate, createAuthor);
authorRouter.get("/:id", validationId, validate, getByIdAuthor);
authorRouter.get("/", validationPaginationOptions, validate, getAllAuthor);
authorRouter.put("/:id", validationId, validate, updateAuthor);
authorRouter.delete("/:id", validationId, validate, deleteAuthor);

export default authorRouter;
