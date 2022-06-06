import { Event } from "@/graphql/types/Event";
import { User } from "@/graphql/types/User";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	entities: [User, Event],
	synchronize: true,
	logging: false,
});
