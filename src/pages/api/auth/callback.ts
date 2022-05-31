import passport from "@/lib/auth";
import { setUserSession } from "@/lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const authenticate = (
	method: string,
	req: NextApiRequest,
	res: NextApiResponse
): Promise<string> =>
	new Promise((resolve, reject) => {
		passport.authenticate(method, { session: false }, (error, token) => {
			if (error) {
				reject(error);
			} else {
				resolve(token);
			}
		})(req, res);
	});

export default nextConnect().get(
	async (req: NextApiRequest, res: NextApiResponse, next: any) => {
		try {
			const token = await authenticate("oauth2", req, res);
			console.log(token);
			await setUserSession(res, token);
			res.writeHead(301, { Location: "/" });
			res.end();
		} catch (error) {
			console.error(error);
			res.status(500).send(error);
		}
	}
);
