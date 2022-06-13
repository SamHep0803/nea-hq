import { useUser } from "@/lib/user";
import { NextPage } from "next";

const Index: NextPage = () => {
	const user = useUser();

	if (user === null) {
		return null;
	}

	return <div> fuck u</div>;
};

export default Index;
