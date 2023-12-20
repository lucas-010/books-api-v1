import { sign } from "jsonwebtoken";

function jwtSign(id: string): string | "JWT_SECRET_NOT_FOUND" {
	if (!process.env.JWT_SECRET) return "JWT_SECRET_NOT_FOUND";

	const payload = {
		id: id,
		expiresIn: "1h",
	};

	return sign(payload, process.env.JWT_SECRET);
}

export default jwtSign;
