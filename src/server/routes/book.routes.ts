import { Router } from "express";
import createBook from "../handlers/book/create";
import getAllBook from "../handlers/book/getAll";
import getByIdBook from "../handlers/book/getById";
import updateBook from "../handlers/book/update";
import deleteBook from "../handlers/book/delete";

const bookRouter = Router();

bookRouter.post("/", createBook);
bookRouter.get("/", getAllBook);
bookRouter.get("/:id", getByIdBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
