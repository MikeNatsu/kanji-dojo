import React from 'react';
import KanjiWordComponent from '../../../components/KanjiWord';
import { KanjiWord } from '../index';

type KanjiParams = {
	kanjiWord: KanjiWord;
};

const kanji = ({ kanjiWord }: KanjiParams) => {
	console.log(kanjiWord);
	return (
		<div>
			<KanjiWordComponent kanjiWord={kanjiWord} />
		</div>
	);
};

export const getStaticProps = async (context: any) => {
	const res = await fetch(
		`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(context.params.id)}`
	);
	const kanjiWord = await res.json();

	return {
		props: {
			kanjiWord,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://kanjiapi.dev/v1/kanji/all`);
	const kanjiWords = await res.json();

	const paths = kanjiWords.map((kanji: string) => ({ params: { id: kanji } }));

	return {
		paths,
		fallback: false,
	};
};

export default kanji;
