import { Router } from "express";
import handleLogin from "../handlers/login/handleLogin";
import validationLogin from "../validations/validationLogin";
import validate from "../middlewares/validate";

const loginRouter = Router();

loginRouter.post("/", validationLogin, validate, handleLogin);

export default loginRouter;
