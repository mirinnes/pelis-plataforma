import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CardItem from "./CardItem";

import "./carrouselCards.scss";

export default function GridWithPages({ pageTitle, data }) {
	return (
		<div className='gridWithPages-container'>
			<Link className='title' to={`/`}>
				<h1 className='title'>
					{pageTitle}
					<FontAwesomeIcon className='icon' icon={faArrowLeft} />
				</h1>
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
					<tbody>
						<tr>
							<td>
								<CardItem dataItem={data.results[5]} />
							</td>
							<td>
								<CardItem dataItem={data.results[6]} />
							</td>
							<td>
								<CardItem dataItem={data.results[7]} />
							</td>
							<td>
								<CardItem dataItem={data.results[8]} />
							</td>
							<td>
								<CardItem dataItem={data.results[9]} />
							</td>
						</tr>
						<tr>
							<td>
								<CardItem dataItem={data.results[10]} />
							</td>
							<td>
								<CardItem dataItem={data.results[11]} />
							</td>
							<td>
								<CardItem dataItem={data.results[12]} />
							</td>
							<td>
								<CardItem dataItem={data.results[13]} />
							</td>
							<td>
								<CardItem dataItem={data.results[14]} />
							</td>
						</tr>
						<tr>
							<td>
								<CardItem dataItem={data.results[15]} />
							</td>
							<td>
								<CardItem dataItem={data.results[16]} />
							</td>
							<td>
								<CardItem dataItem={data.results[17]} />
							</td>
							<td>
								<CardItem dataItem={data.results[18]} />
							</td>
							<td>
								<CardItem dataItem={data.results[19]} />
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
}
