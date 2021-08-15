import Link from 'next/link';

const Nav = () => {
	return (
		<nav>
			<ul className="d-flex justify-content-center m-2 p-2">
				<Link href="/" replace>
					<a className="mx-3">Home</a>
				</Link>

				<Link href="/kanji" replace>
					<a className="mx-3">Dictionary</a>
				</Link>
				<a
					href="https://kanjiapi.dev/"
					target="_blank"
					rel="noreferrer"
					className="mx-3"
				>
					API
				</a>
			</ul>
		</nav>
	);
};

export default Nav;
