import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faVideo,
	faTv,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
export default function Header() {
	return (
		<div className='main-header'>
			<FontAwesomeIcon className='icon' icon={faHome} />
			<FontAwesomeIcon className='icon' icon={faVideo} />
			<FontAwesomeIcon className='icon' icon={faTv} />
			<label  className='search'>
				<FontAwesomeIcon className='icon' icon={faSearch} />
				<input
					placeholder='Búsqueda...'
					name='search'
					id='search'
					type='text'
					className='search-input'
				/>
			</label>
		</div>
	);
}
