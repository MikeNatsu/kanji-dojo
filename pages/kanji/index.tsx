import { useRouter } from 'next/router';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DropdownComponent from '../../components/Dropdown';
import KanjiBox from '../../components/Kanji/KanjiBox';
import { pageDivider } from '../../utils/pageDividerUtils';

export interface KanjiWordType {
	kanji: string;
	grade: number;
	kun_readings: string[];
	meanings: string[];
	unicode: string;
	name_readings: string[];
}

type KanjiWordsParams = {
	kanjiWords: string[];
};

export const kanjiTypes = ['joyo', 'jouyou', 'jinmeiyo', 'jinmeiyou', 'all'];

const kanji = ({ kanjiWords }: KanjiWordsParams) => {
	const router = useRouter();
	const { page } = router.query;
	const [words, setWords] = useState<string[]>(kanjiWords);
	const [currentIndex, setCurrentIndex] = useState<number>(1);

	const getWordsFromType = async (keyword: string) => {
		const res = await fetch(`https://kanjiapi.dev/v1/kanji/${keyword}`);
		const requestedWords = await res.json();
		setWords(await requestedWords);
	};
	useEffect(() => {
		if (typeof page === 'string') {
			setCurrentIndex(parseInt(page));
		}
	}, [page]);

	return (
		<div className="m-4">
			<h2 className="text-center text-decoration-underline">Dictionary</h2>
			<div className="category d-flex px-5 m-5">
				<DropdownComponent
					title="Types"
					setter={getWordsFromType}
					items={kanjiTypes}
					defaultItem="all"
				/>
				<div className="container text-center">
					{[...Array(pageDivider(words.length, 10))].map((_, index) => {
						if (
							index == 0 ||
							currentIndex === index ||
							(index === currentIndex - 1 && currentIndex > 0) ||
							index === (pageDivider(words.length, 10) - 1) / 2 ||
							(index === currentIndex - 2 && currentIndex < words.length) ||
							index === pageDivider(words.length, 10) - 1
						) {
							return (
								<span key={`${index}`}>
									<Link
										href={{
											pathname: '/kanji',
											query: { page: (index + 1).toString() },
										}}
									>
										{currentIndex - 1 === index ? (
											<b>
												<a className="text-muted text-decoration-none">
													{index + 1}
												</a>
											</b>
										) : (
											<a className="text-muted text-decoration-none">
												{currentIndex - 2 === index
													? ` ....${index + 1}`
													: currentIndex === index
													? `${index + 1}.... `
													: `${index + 1}`}
											</a>
										)}
									</Link>
									{'  '}
								</span>
							);
						}
					})}
				</div>
			</div>
			<div className="d-flex flex-column flex-wrap container">
				{words.map((kanji: string, index: number) => {
					if (
						index >= (currentIndex - 1) * 10 &&
						index <= (currentIndex - 1) * 10 + 10
					) {
						return <KanjiBox key={index.toString()} kanji={kanji} />;
					}
				})}
			</div>
			<div className="container text-center text-dark text-decoration-none">
				{[...Array(pageDivider(words.length, 10))].map((_, index) => {
					if (
						index == 0 ||
						currentIndex === index ||
						(index === currentIndex - 1 && currentIndex > 0) ||
						index === (pageDivider(words.length, 10) - 1) / 2 ||
						(index === currentIndex - 2 && currentIndex < words.length) ||
						index === pageDivider(words.length, 10) - 1
					) {
						return (
							<span key={`${index}`}>
								<Link
									href={{
										pathname: '/kanji',
										query: { page: (index + 1).toString() },
									}}
								>
									{currentIndex - 1 === index ? (
										<b>
											<a className="text-muted text-decoration-none">
												{index + 1}
											</a>
										</b>
									) : (
										<a className="text-muted text-decoration-none">
											{currentIndex - 2 === index
												? ` ....${index + 1}`
												: currentIndex === index
												? `${index + 1}.... `
												: `${index + 1}`}
										</a>
									)}
								</Link>
								{'  '}
							</span>
						);
					}
				})}
			</div>
		</div>
	);
};

export const getStaticProps = async () => {
	const res = await fetch(`https://kanjiapi.dev/v1/kanji/all`);
	const kanjiWords = await res.json();
	return {
		props: {
			kanjiWords,
		},
	};
};

export default kanji;
