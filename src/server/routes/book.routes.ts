import { Router } from "express";
import createBook from "../handlers/book/create";
import getAllBook from "../handlers/book/getAll";
import getByIdBook from "../handlers/book/getById";
import updateBook from "../handlers/book/update";
import deleteBook from "../handlers/book/delete";
import validationBook from "../validations/validationBook";
import validate from "../middlewares/validate";
import validationPaginationOptions from "../validations/validationPaginationOptions";
import validationId from "../validations/validationId";

const bookRouter = Router();

bookRouter.post("/", validationBook, validate, createBook);
bookRouter.get("/", validationPaginationOptions, validate, getAllBook);
bookRouter.get("/:id", validationId, validate, getByIdBook);
bookRouter.put("/:id", validationId, validate, updateBook);
bookRouter.delete("/:id", validationId, validate, deleteBook);

export default bookRouter;
