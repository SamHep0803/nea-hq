import { RatingBadge } from "@/components/RatingBadge";
import { useUser } from "@/lib/user";
import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Index: NextPage = () => {
	const user = useUser();

	if (user === null) {
		return null;
	}

	return (
		<Flex w={"100%"} flexDir={"column"} h={"100%"}>
			<Flex
				borderRadius={4}
				justifyContent={"center"}
				w={"100%"}
				h={{ base: "10%" }}
				backgroundImage={"/header.png"}
				backgroundSize={"cover"}
				backgroundPosition={"50% 40%"}
			>
				<Flex
					w={"100%"}
					h={"100%"}
					justifyContent={"center"}
					alignItems={"center"}
					background={"rgba(0,0,0,0.65)"}
				>
					<Heading fontSize={{ base: "2xl", sm: "3xl" }}>
						<Heading as="span" textColor={"gray.200"} fontSize={"3xl"}>
							Welcome,{" "}
						</Heading>
						{user.personal.name_full} -{" "}
						<RatingBadge rating={user.vatsim.rating.id} fontSize={"xl"} />
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Index;
