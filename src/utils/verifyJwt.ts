import { verify } from "jsonwebtoken";

function verifyJwt(token: string) {
	if (!process.env.JWT_SECRET) return "JWT_SECRET_NOT_FOUND";

	try {
		const decoded = verify(token, process.env.JWT_SECRET);
		if (typeof decoded === "string") {
			return "INVALID_TOKEN";
		}

		return decoded;
	} catch (error) {
		return "INVALID_TOKEN";
	}
}

export default verifyJwt;
