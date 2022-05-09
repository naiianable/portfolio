import React from "react";

import Title from "../Title";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const HomepageDash: React.FC = () => {
	return (
		<div className="flex flex-col m-10">
			<div className="flex justify-center">
				<Title />
			</div>
			<div className="flex justify-center my-5">
				<AboutMe />
			</div>
			<div className="flex justify-center my-5">
				<Portfolio />
			</div>
			<div className="flex justify-center my-5">
				<Contact />
			</div>
		</div>
	);
};

export default HomepageDash;
