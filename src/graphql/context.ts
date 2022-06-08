import { createSessionCtx, UserSession } from "@/lib/session";
import { MicroRequest } from "apollo-server-micro/dist/types";

export type Context = {
	session: UserSession | null;
};

export const createContext = async (req: MicroRequest): Promise<Context> => {
	return {
		session: await createSessionCtx(req),
	};
};
