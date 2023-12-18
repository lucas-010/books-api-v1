import { Router } from "express";
import createAuthor from "../handlers/author/create";
import getByIdAuthor from "../handlers/author/getById";
import getAllAuthor from "../handlers/author/getAll";
import updateAuthor from "../handlers/author/update";
import deleteAuthor from "../handlers/author/delete";

const authorRouter = Router();

authorRouter.post("/", createAuthor);
authorRouter.get("/:id", getByIdAuthor);
authorRouter.get("/", getAllAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.delete("/:id", deleteAuthor);

export default authorRouter;
