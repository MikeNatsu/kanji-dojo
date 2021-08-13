import React from 'react';
import KanjiBox from '../../components/Kanji/KanjiBox';

export interface KanjiWordType {
	kanji: string;
	grade: number;
	meanings: string[];
	unicode: string;
	name_readings: string[];
}

type KanjiWordsParams = {
	kanjiWords: string[];
};

const kanji = ({ kanjiWords }: KanjiWordsParams) => {
	return (
		<div className="m-4">
			<h2 className="text-center">Dictionary</h2>
			<div className="d-flex flex-wrap container">
				{kanjiWords.map((kanji: string, index: number) => {
					if (index <= 50) {
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
