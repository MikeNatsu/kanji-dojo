import Link from 'next/link';
import React from 'react';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="header d-flex">
			<Link href="/" replace>
				<h1 className="flex-grow-1 px-3 ">Kanji Dojo</h1>
			</Link>
			<Nav />
		</header>
	);
};

export default Header;
