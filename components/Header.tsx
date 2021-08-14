import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="d-flex">
			<h1 className="flex-grow-1 px-3">Kanji Dojo</h1>
			<Nav />
		</header>
	);
};

export default Header;
