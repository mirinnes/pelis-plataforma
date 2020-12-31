import React from "react";
import CarrouselCards from "../common/CarrouselCards";

export default function PopularMovies({ data }) {
	return (
		<>
			<CarrouselCards
				cardsTitle='Películas Populares'
				pagePath='popular'
				data={data}
			/>
		</>
	);
}
