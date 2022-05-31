import theme from "@/theme";
import {
	Button,
	ChakraProvider,
	Container,
	Flex,
	Heading,
	Img,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactElement } from "react";

interface LoginProps {}

const Login = () => {
	return (
		<Container maxW={"7xl"} h={"100%"}>
			<Flex flexDir={"column"} align={"center"}>
				<Img src="/white.png" alt="logo" boxSize={80} />
				<Heading mt={10} fontSize={"6xl"}>
					Control Center Login
				</Heading>
				<NextLink href="/api/auth/callback">
					<Button
						colorScheme={"green"}
						rounded={"2xl"}
						px={6}
						_hover={{ bg: "primary.500" }}
						flexGrow={0}
						mt={10}
					>
						Login with
						<Img src="/vatsim_black.png" alt="VATSIM" h="25px" ml={1} />
					</Button>
				</NextLink>
			</Flex>
		</Container>
	);
};

export default Login;

Login.getLayout = (page: ReactElement) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			{page}
		</ChakraProvider>
	);
};
