import { NextApiRequest, NextApiResponse } from "next";
import { serialize, parse } from "cookie";

export type Cookies = {
	[key: string]: string;
};

const TOKEN_COOKIE_NAME = "token";
export const MAX_AGE = 1000 * 60 * 60 * 24 * 7;

export const setTokenCookie = (res: NextApiResponse, token: string) => {
	const cookie = serialize(TOKEN_COOKIE_NAME, token, {
		maxAge: MAX_AGE,
		expires: new Date(Date.now() + MAX_AGE),
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		sameSite: "lax",
	});
	res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res: NextApiResponse) => {
	const cookie = serialize(TOKEN_COOKIE_NAME, "", {
		maxAge: -1,
		path: "/",
	});
	res.setHeader("Set-Cookie", cookie);
};

export const getTokenCookie = (req: NextApiRequest): string | undefined => {
	const cookies = parseCookies(req);
	return cookies[TOKEN_COOKIE_NAME];
};

export const parseCookies = (req: NextApiRequest): Cookies => {
	return req.cookies;
};
