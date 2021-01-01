import React from "react";
import CarrouselCards from "../common/CarrouselCards";

export default function Tendency({ data, title, pagePath }) {
	return (
		<>
			<CarrouselCards cardsTitle={title} pagePath={pagePath} data={data} />
		</>
	);
}
