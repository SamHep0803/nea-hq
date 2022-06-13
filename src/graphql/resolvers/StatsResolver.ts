import { Field, Int, Resolver } from "type-graphql";
import axios from "axios";

@Resolver()
export class StatsResolver {
	@Field(() => Int)
	stats() {
		const response = axios.get("https://data.vatsim.net/v3/vatsim-data.json");
	}
}
