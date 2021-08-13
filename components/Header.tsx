import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="d-flex">
			<h1 className="flex-grow-1">Kanji Dojo</h1>
			<Nav />
		</header>
	);
};

export default Header;
