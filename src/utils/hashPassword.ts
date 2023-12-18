import { hash } from "bcryptjs";

async function hashPassword(password: string): Promise<string> {
	const hashedPassword = await hash(password, 10);
	return hashedPassword;
}

export default hashPassword;
