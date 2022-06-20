import "reflect-metadata";
import { createContext } from "@/graphql/context";
import { HelloResolver } from "@/graphql/resolvers/HelloResolver";
import { dataSource } from "@/lib/orm";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { RequestHandler } from "micro";
import Cors from "micro-cors";
import { buildSchema } from "type-graphql";
import { UserResolver } from "@/graphql/resolvers/UserResolver";
import { EventResolver } from "@/graphql/resolvers/EventResolver";
import { StatsResolver } from "@/graphql/resolvers/StatsResolver";

const cors = Cors();

let apolloServerHandler: RequestHandler;

const getApolloServerHandler = async (): Promise<RequestHandler> => {
	const apolloServer = new ApolloServer({
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
		schema: await buildSchema({
			resolvers: [HelloResolver, UserResolver, EventResolver, StatsResolver],
		}),
		context: async ({ req }: { req: MicroRequest }) => {
			return createContext(req);
		},
	});
	if (!apolloServerHandler) {
		await dataSource.initialize();
		await apolloServer.start();
		apolloServerHandler = apolloServer.createHandler({
			path: "/api/graphql",
		});
	}
	return apolloServerHandler;
};

const handler: RequestHandler = async (req, res) => {
	const apolloServerHandler = await getApolloServerHandler();
	if (req.method === "OPTIONS") {
		res.end();
		return false;
	}

	return apolloServerHandler(req, res);
};

export default cors(handler);

export const config = {
	api: {
		bodyParser: false,
	},
};
