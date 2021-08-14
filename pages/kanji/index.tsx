import React, { useState } from 'react';
import DropdownComponent from '../../components/Dropdown';
import KanjiBox from '../../components/Kanji/KanjiBox';

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
	const [words, setWords] = useState<string[]>(kanjiWords);

	const getWordsFromType = async (keyword: string) => {
		const res = await fetch(`https://kanjiapi.dev/v1/kanji/${keyword}`);
		const requestedWords = await res.json();

		setWords(await requestedWords);
	};

	return (
		<div className="m-4">
			<h2 className="text-center text-decoration-underline">Dictionary</h2>
			<div className="category px-5 m-5">
				<DropdownComponent
					title="Types"
					setter={getWordsFromType}
					items={kanjiTypes}
				/>
			</div>
			<div className="d-flex flex-column flex-wrap container">
				{words.map((kanji: string, index: number) => {
					if (index <= 15) {
						return <KanjiBox kanji={kanji} />;
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
