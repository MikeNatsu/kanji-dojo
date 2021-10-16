import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export type LayoutType = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
	return (
		<main className="d-flex flex-column justify-content-between">
			<Header />
			<div className="flex-grow-1 ">{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
