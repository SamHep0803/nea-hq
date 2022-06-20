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
	const regexExps = Object.values(callsigns);
	return regexExps.some((regexExp) => {
		if (airport.match(regexExp)) {
			return true;
		}
	});
};

const callsigns = {
	HECC: /(^HE[A-Z]{2}((.+)?)$)/,
	OJAC: /(^OJ[A-Z]{2}(.+)?$)|(^AMM_APP$)/,
	OMAE: /(^OM[A-Z]{2}(.+)?$)/,
	OBBB: /(^OB[A-Z]{2}(.+)?$)|(^DOH_(?:._|)APP$)|(^OT[A-Z]{2}(.+)?$)/,
	OKAC: /(^OK[A-Z]{2}(.+)?$)/,
	ORBB: /(^OR[A-Z]{2}(.+)?$)/,
	OIIX: /(^OI[A-Z]{2}(.+)?$)|(^TEH_.+$)/,
	OSTT: /(^OS[A-Z]{2}(.+)?$)/,
	OOMM: /(^OO[A-Z]{2}(.+)?$)/,
	OYSC: /(^OY[A-Z]{2}(.+)?$)/,
	OEJN: /(^OE[A-Z]{2}(.+)?$)/,
	OLBB: /(^OL[A-Z]{2}(.+)?$)/,
	GULF: /^GULF_(E_|W_|)FSS$/,
	AFR: /^AFR(N|E|)_FSS$/,
	MENA: /^MENA_(E_|W_|S_|C_)FSS$/,

	HLLL: /(^HL[A-Z]{2}(.+)?$)/,
	HSSS: /(^HS[A-Z]{2}(.+)?$)/,
	HAAA: /(^HA[A-Z]{2}(.+)?$)/,
	HHAA: /(^HH[A-Z]{2}(.+)?$)/,
	HCSM: /(^HC[A-Z]{2}(.+)?$)/,
	DTTC: /(^DT[A-Z]{2}(.+)?$)/,
	DAAA: /(^DA[A-Z]{2}(.+)?$)/,
	FTTT: /(^FT[A-Z]{2}(.+)?$)/,
	DRRR: /(^DR[A-Z]{2}(.+)?$)/,
	GMMM: /(^GM[A-Z]{2}(.+)?$)/,
};
