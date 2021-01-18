import React from "react";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./carrouselCards.scss";

export default function CarrouselCards({ cardsTitle, pagePath, data }) {
	return (
		<div className={`carrousel-container`}>
			<Link className='title' to={`/${pagePath}/page/1`}>
				{cardsTitle}
				<FontAwesomeIcon className='icon' icon={faArrowRight} />
			</Link>
			{data && (
				<table className={`grid`}>
					<thead>
						<tr>
							<th>
								<CardItem dataItem={data.results[0]} />
							</th>
							<th>
								<CardItem dataItem={data.results[1]} />
							</th>
							<th>
								<CardItem dataItem={data.results[2]} />
							</th>
							<th>
								<CardItem dataItem={data.results[3]} />
							</th>
							<th>
								<CardItem dataItem={data.results[4]} />
							</th>
						</tr>
					</thead>
				</table>
			)}
		</div>
	);
}
