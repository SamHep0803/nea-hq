import { Badge, FlexProps } from "@chakra-ui/react";
import React from "react";

type RatingBadgeProps = FlexProps & {
	rating: number | undefined;
};

interface BadgeOptions {
	color: string;
	text: string;
}

export const RatingBadge: React.FC<RatingBadgeProps | null> = ({
	rating,
	...props
}) => {
	if (!rating) {
		return null;
	}

	const parsedRating = parseRating(rating);
	if (!parsedRating) {
		return null;
	}

	return (
		<Badge colorScheme={parsedRating.color} fontSize="md" {...props}>
			{parsedRating.text}
		</Badge>
	);
};

const parseRating = (position: number): BadgeOptions | undefined => {
	if (!position) {
		return;
	}
	switch (position) {
		case 1:
			return {
				color: "blue",
				text: "OBS",
			};
		case 2:
			return {
				color: "green",
				text: "S1",
			};
		case 3:
			return {
				color: "yellow",
				text: "S2",
			};
		case 4:
			return {
				color: "orange",
				text: "S3",
			};
		case 5:
			return {
				color: "red",
				text: "C1",
			};
		case 6:
			return {
				color: "purple",
				text: "C2",
			};
		case 7:
			return {
				color: "blue",
				text: "C3",
			};
		case 8:
			return {
				color: "gray",
				text: "I1",
			};
		case 9:
			return {
				color: "gray",
				text: "I2",
			};
		case 10:
			return {
				color: "gray",
				text: "I3",
			};
		case 11:
			return {
				color: "gray",
				text: "SUP",
			};
		case 12:
			return {
				color: "red",
				text: "ADM",
			};
	}
};
