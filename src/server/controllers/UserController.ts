import User from "../../entities/User/User";
import UserService from "../../services/UserService";
import BaseController from "./BaseController";

class UserController extends BaseController<User, UserService> {
	constructor() {
		super(new UserService());
	}
}

export default UserController;
