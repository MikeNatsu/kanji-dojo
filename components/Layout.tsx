import React, { ReactNode } from 'react';
import Header from './Header';

export type LayoutType = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutType) => {
	return (
		<div>
			<main>
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Layout;
