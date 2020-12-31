import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import CardItem from "./CardItem";

import "./carrouselCards.scss";

export default function GridWithPages({ pageTitle }) {
	return (
		<div className='gridWithPages-container'>
			<Link className='title' to={`/`}>
				<h1 className='title'>
					{pageTitle}
					<FontAwesomeIcon className='icon' icon={faArrowLeft} />
				</h1>
			</Link>
			<table class={`grid`}>
				<thead>
					<tr>
						<th>
							<CardItem />
						</th>
						<th>
							<CardItem />
						</th>
						<th>
							<CardItem />
						</th>
						<th>
							<CardItem />
						</th>
						<th>
							<CardItem />
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
					</tr>
					<tr>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
					</tr>
					<tr>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
						<td>
							<CardItem />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
