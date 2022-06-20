import { Controller, Pilot } from "@/interfaces/DataFeed";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Stats {
	@Field(() => [Controller])
	onlineAtc: Controller[];

	@Field(() => [Pilot])
	departures: Pilot[];

	@Field(() => [Pilot])
	arrivals: Pilot[];
}
