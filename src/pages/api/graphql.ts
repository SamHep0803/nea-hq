import { createContext } from "@/graphql/context";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import Cors from "micro-cors";

const cors = Cors();

const apolloServer = new ApolloServer({
	plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
	context: async ({ req }: { req: MicroRequest }) => {
		return createContext(req);
	},
});

const startServer = apolloServer.start;

export default cors(async (req, res) => {
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	await startServer();

	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
});

export const config = {
	api: {
		bodyParser: false,
	},
};
