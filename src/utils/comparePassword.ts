import { compare } from "bcryptjs";

async function comparePassword(password: string, hashPassword: string) {
	const match = await compare(password, hashPassword);
	return match;
}

export default comparePassword;
