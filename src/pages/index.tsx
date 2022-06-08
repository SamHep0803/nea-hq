import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";

const Index: NextPage = () => {
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
					background={"rgba(0,0,0,0.62)"}
				>
					<Heading fontSize={{ base: "2xl", sm: "3xl" }}>
						North-East Africa vACC
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Index;
