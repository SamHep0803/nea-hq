import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";

const Index = () => {
	const tests = [];
	for (let i = 0; i < 50; i++) {
		tests.push(<div>Test</div>);
	}
	return (
		<Flex height="100vh" width="100%">
			<Sidebar />
			<Header />
			<Box ml={"64"} mt={"20"}>
				{tests}
			</Box>
		</Flex>
	);
};

export default Index;
