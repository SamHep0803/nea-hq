import { useUser } from "@/lib/user";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { Layout } from "../layouts/Layout";

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const defaultLayout = (page: ReactElement) => {
	const router = useRouter();
	const user = useUser();

	if (user === null) {
		router.push("/login");
		console.log(user || "no user");
	}
	return (
		<ChakraProvider resetCSS theme={theme}>
			<style>
				{`
        body {
          overscroll-behavior-y: none;
        }
        `}
			</style>
			<Layout>{page}</Layout>
		</ChakraProvider>
	);
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? defaultLayout;

	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
