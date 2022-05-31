import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Layout } from "../layouts/Layout";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<style global>
				{`
        body {
          overscroll-behavior-y: none;
        }
        `}
			</style>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
