import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Stats {
	@Field(() => Int)
	onlineAtc: number;

	@Field(() => Int)
	departures: number;

	@Field(() => Int)
	arrivals: number;
}
