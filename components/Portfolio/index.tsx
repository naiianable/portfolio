import React from "react";
import Image from "next/image";

import marioPlaceholder from "../../public/portfolio/marioPlaceholder.jpeg";

const Portfolio = () => {
	return (
		<div className="flex flex-col items-center">
			<div>Portfolio</div>
			<div className="flex flex-row">
				<div className="border border-mario-mainRed rounded-lg p-2">
					<Image
						className="object-scale-down h-10 w-10"
						src={marioPlaceholder}
						alt=""
					/>
					portfolio card 1
				</div>
				<div>portfolio card 2</div>
				<div>portfolio card 2</div>
			</div>
		</div>
	);
};

export default Portfolio;
