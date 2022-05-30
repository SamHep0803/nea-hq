import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "@components/Sidebar";

const Index = () => {
	const tests = [];
	for (let i = 0; i < 50; i++) {
		tests.push(<div>Test</div>);
	}
	return (
		<Flex height="100vh" width="100%">
			<Flex>
				<Sidebar />
			</Flex>
			<Box m={60}>{tests}</Box>
		</Flex>
	);
};

export default Index;
