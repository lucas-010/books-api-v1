import { Router } from "express";
import createUser from "../handlers/user/create";
import getAllUser from "../handlers/user/getAll";
import getByIdUser from "../handlers/user/getById";
import updateUser from "../handlers/user/update";
import deleteUser from "../handlers/user/delete";
import validationUser from "../validations/validationUser";
import validate from "../middlewares/validate";
import validationPaginationOptions from "../validations/validationPaginationOptions";
import validationId from "../validations/validationId";
import authenticateJwt from "../middlewares/authenticateJwt";

const userRouter = Router();

userRouter.post("/", authenticateJwt, validationUser, validate, createUser);
userRouter.get("/", validationPaginationOptions, validate, getAllUser);
userRouter.get("/:id", validationId, validate, getByIdUser);
userRouter.put("/:id", authenticateJwt, validationId, validate, updateUser);
userRouter.delete("/:id", authenticateJwt, validationId, validate, deleteUser);

export default userRouter;
