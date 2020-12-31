import React from "react";
import CarrouselCards from "../common/CarrouselCards";

export default function BestCritic({ data }) {
	return (
		<>
			<CarrouselCards
				cardsTitle='Películas con mejores críticas'
				pagePath='top_rated'
				data={data}
			/>
		</>
	);
}
