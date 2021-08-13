import React from 'react';

export interface KanjiWord {
	kanji: string;
	grade: number;
	meanings: string[];
}

type KanjiParams = {
	kanjiWord: KanjiWord;
};

const kanji = ({ kanjiWord }: KanjiParams) => {
	console.log(kanjiWord);
	return <div></div>;
};

export const getStaticProps = async (context: any) => {
	const res = await fetch(`https://kanjiapi.dev/v1/kanji/${context.params.id}`);
	const kanjiWord = res.json() as Promise<KanjiWord>;

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
