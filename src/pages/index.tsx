import { NextPage } from "next";

const Index: NextPage = () => {
	const tests = [];
	for (let i = 0; i < 50; i++) {
		tests.push(<div>Test</div>);
	}

	return <div>{tests}</div>;
};

export default Index;
