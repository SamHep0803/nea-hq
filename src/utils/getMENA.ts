import { Controller, Pilot } from "@/interfaces/DataFeed";

export const getMENADepartures = (pilots: Pilot[]): Pilot[] => {
	return pilots.filter((pilot) => {
		if (pilot.flight_plan === null) {
			return false;
		}
		return checkAirport(pilot.flight_plan.departure);
	});
};

export const getMENAArrivals = (pilots: Pilot[]): Pilot[] => {
	return pilots.filter((pilot) => {
		if (pilot.flight_plan === null) {
			return false;
		}
		return checkAirport(pilot.flight_plan.arrival);
	});
};

export const getMENAControllers = (controllers: Controller[]): Controller[] => {
	return controllers.filter((controller) => {
		if (controller.facility !== 0) {
			return checkAirport(controller.callsign);
		}
	});
};

const checkAirport = (airport: string): boolean => {
	return (
		airport.startsWith("OM") ||
		airport.startsWith("OT") ||
		airport.startsWith("DOH") ||
		airport.startsWith("OB") ||
		airport.startsWith("OI") ||
		airport.startsWith("OY") ||
		airport.startsWith("OO") ||
		airport.startsWith("OE") ||
		airport.startsWith("OJ") ||
		airport.startsWith("OL") ||
		airport.startsWith("OR") ||
		airport.startsWith("OK") ||
		airport.startsWith("HE") ||
		airport.startsWith("HL") ||
		airport.startsWith("HS") ||
		airport.startsWith("HA") ||
		airport.startsWith("HH") ||
		airport.startsWith("HC") ||
		airport.startsWith("DA") ||
		airport.startsWith("DT") ||
		airport.startsWith("DR") ||
		airport.startsWith("GM") ||
		airport.startsWith("FT")
	);
};
