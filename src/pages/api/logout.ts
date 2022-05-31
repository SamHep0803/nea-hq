import { removeTokenCookie } from "@/lib/cookie";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	removeTokenCookie(res);
	res.writeHead(302, { Location: "/login" });
	res.end();
};

export default handler;
