import React from 'react';
import KanjiWordComponent from '../../../components/Kanji/KanjiWord';
import { KanjiWordType } from '../index';

type KanjiParams = {
	kanjiWord: KanjiWordType;
};

const kanji = ({ kanjiWord }: KanjiParams) => {
	return (
		<div className="container border rounded p-4 w-50">
			<KanjiWordComponent key={kanjiWord.unicode} kanjiWord={kanjiWord} />
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
