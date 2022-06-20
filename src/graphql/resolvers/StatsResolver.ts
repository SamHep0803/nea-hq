import { Field, Int, Query, Resolver } from "type-graphql";
import axios from "axios";
import { DataFeed, Pilot } from "@/interfaces/DataFeed";
import { Stats } from "@/graphql/types/Stats";
import {
	getMENAArrivals,
	getMENAControllers,
	getMENADepartures,
} from "@/utils/getMENA";

@Resolver()
export class StatsResolver {
	@Query(() => Stats)
	async stats(): Promise<Stats> {
		const { data }: { data: DataFeed } = await axios.get(
			"https://data.vatsim.net/v3/vatsim-data.json"
		);

		const MENAControllers = getMENAControllers(data.controllers);
		const MENADepartures = getMENADepartures(data.pilots as Pilot[]);
		const MENAArrivals = getMENAArrivals(data.pilots as Pilot[]);

		return {
			onlineAtc: MENAControllers,
			departures: MENADepartures,
			arrivals: MENAArrivals,
		};
	}
}
