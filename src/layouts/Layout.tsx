import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex height="100vh" width="100%">
			<Sidebar isOpen={isOpen} onClose={onClose} />
			<Box>
				<Header onOpen={onOpen} />
				<Box ml={{ base: "0", md: "64" }} mt={"20"} p={6}>
					{children}
				</Box>
			</Box>
		</Flex>
	);
};
