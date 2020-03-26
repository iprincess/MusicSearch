import './SearchNav.scss';
import React from 'react';
import { NavLink, useParams } from "react-router-dom";

export const SearchNav = () => {
	const params = useParams();
	const className = "nav-link";

	const getTo = (path) => {
		const result = path + (params.query ? `/${params.query}` : '');
		return result;
	}

	const links = [
		{ path: "/artist", text: "Artist" },
		{ path: "/album", text: "Album" },
		{ path: "/song", text: "Song" },
	];

	const navLinks = links.map((link, index) => {
		return (
			<NavLink 
				key={index}
				className={className} 
				to={getTo(link.path)}>{link.text}
			</NavLink>
		);
	})

  return (
		<nav className="nav search-nav flex-container center-items center-content">
			<span>Search by:</span>
			{navLinks}
		</nav>
  );
}