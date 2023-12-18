import { Router } from "express";
import createUser from "../handlers/user/create";
import getAllUser from "../handlers/user/getAll";
import getByIdUser from "../handlers/user/getById";
import updateUser from "../handlers/user/update";
import deleteUser from "../handlers/user/delete";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getAllUser);
userRouter.get("/:id", getByIdUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
