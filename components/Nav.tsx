import Link from 'next/link';

const Nav = () => {
	return (
		<nav>
			<ul className="d-flex justify-content-center m-2 p-2">
				<Link href="/kanji" replace>
					<a className="mx-3">Dictionary</a>
				</Link>
				<a href="https://kanjiapi.dev/" target="_blank" className="mx-3">
					API
				</a>
			</ul>
		</nav>
	);
};

export default Nav;
