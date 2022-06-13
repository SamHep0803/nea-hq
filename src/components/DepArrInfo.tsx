import { Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineRadar } from "react-icons/md";

interface DepArrInfoProps {}

export const DepArrInfo: React.FC<DepArrInfoProps> = ({}) => {
	return (
		<Flex
			flexDir="column"
			justifyContent="center"
			h={"20%"}
			borderRadius={"md"}
			backgroundColor={useColorModeValue("gray.200", "gray.900")}
			p={4}
		>
			<Text
				textColor={useColorModeValue("gray.600", "gray.500")}
				fontSize={"sm"}
				fontWeight={"medium"}
				mx={4}
				mt={2}
			>
				Division Stats
			</Text>
			<Flex
				justifyContent={"space-between"}
				alignItems={"center"}
				h={"100%"}
				w={"100%"}
			>
				<Flex flexDir="column" alignItems="center" mx="auto">
					<Icon as={MdOutlineRadar} w={14} h={14} color="primary.400" />
					<Heading size="md" textAlign="center">
						Online ATC: 0
					</Heading>
				</Flex>
				<Flex flexDir="column" alignItems="center" mx="auto">
					<Icon as={FaPlaneDeparture} w={14} h={14} color="primary.400" />
					<Heading size="md" textAlign="center">
						Online ATC: 0
					</Heading>
				</Flex>
				<Flex flexDir="column" alignItems="center" mx="auto">
					<Icon as={FaPlaneArrival} w={14} h={14} color="primary.400" />
					<Heading size="md" textAlign="center">
						Online ATC: 0
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};
