import { Field, Int, ObjectType } from "type-graphql";

export interface DataFeed {
	general: General;
	pilots: Pilot[];
	controllers: Controller[];
	atis: ATIS[];
	servers: Server[];
	prefiles: Prefile[];
	facilities: Facility[];
	ratings: Rating[];
	pilot_ratings: PilotRating[];
}

interface General {
	version: number;
	reload: number;
	update: string;
	update_timestamp: string;
	connected_clients: number;
	unique_users: number;
}

@ObjectType()
export class Pilot {
	@Field(() => Int)
	cid: number;

	@Field()
	name: string;

	@Field()
	callsign: string;

	@Field()
	server: string;

	@Field(() => Int)
	pilot_rating: number;

	@Field(() => Int)
	latitude: number;

	@Field(() => Int)
	longitude: number;

	@Field(() => Int)
	altitude: number;

	@Field(() => Int)
	groundspeed: number;

	@Field()
	transponder: string;

	@Field(() => Int)
	heading: number;

	@Field(() => Int)
	qnh_i_hg: number;

	@Field(() => Int)
	qnh_mb: number;

	@Field(() => FlightPlan, { nullable: true })
	flight_plan: FlightPlan | null;

	@Field()
	logon_time: string;

	@Field()
	last_updated: string;
}

@ObjectType()
export class FlightPlan {
	@Field(() => String)
	flight_rules: "I" | "V" | "S";

	@Field()
	aircraft: string;

	@Field()
	aircraft_faa: string;

	@Field()
	aircraft_short: string;

	@Field()
	departure: string;

	@Field()
	arrival: string;

	@Field()
	alternate: string;

	@Field()
	cruise_tas: string;

	@Field()
	altitude: string;

	@Field()
	deptime: string;

	@Field()
	enroute_time: string;

	@Field()
	fuel_time: string;

	@Field()
	remarks: string;

	@Field()
	route: string;

	@Field(() => Int)
	revision_id: number;

	@Field()
	assigned_transponder: string;
}

@ObjectType()
export class Controller {
	@Field(() => Int)
	cid: number;

	@Field()
	name: string;

	@Field()
	callsign: string;

	@Field()
	frequency: string;

	@Field(() => Int)
	facility: number;

	@Field(() => Int)
	rating: number;

	@Field()
	server: string;

	@Field(() => Int)
	visual_range: number;

	@Field(() => [String])
	text_atis: string[];

	@Field()
	last_updated: string;

	@Field()
	logon_time: string;
}

interface ATIS {
	cid: number;
	name: string;
	callsign: string;
	frequency: string;
	facility: number;
	rating: number;
	server: string;
	visual_range: number;
	atis_code: string;
	text_atis: string[];
	last_updated: string;
	logon_time: string;
}

interface Server {
	ident: string;
	hostname_or_ip: string;
	location: string;
	name: string;
	clients_connection_allowed: number;
	client_connections_allowed: true;
	is_sweatbox: boolean;
}

interface Prefile {
	cid: number;
	name: string;
	callsign: string;
	flight_plan: FlightPlan;
	last_updated: string;
}

interface Facility {
	id: number;
	short: string;
	long: string;
}

interface Rating {
	id: number;
	short: string;
	long: string;
}

interface PilotRating {
	id: number;
	short_name: string;
	long_name: string;
}
