import {Route} from "@tanstack/react-location";
import {Helmet} from "react-helmet-async";
import {FC} from "react";

import {RouteGenerics} from "../index";

const Page: FC = () => {
	return <>
		<Helmet>
			<title>Hero Background - Numsgil Co</title>
		</Helmet>
		<p>Hero Background</p>
	</>;
};

const route: Route<RouteGenerics> = {
	path: "background",
	element: <Page />,
	meta: {},
};

export default route;
