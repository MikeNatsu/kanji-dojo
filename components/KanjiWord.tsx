import React from 'react';
import { KanjiWord } from '../pages/kanji';

const KanjiWordComponent = ({ kanjiWord }: { kanjiWord: KanjiWord }) => {
	return (
		<>
			<h1>{kanjiWord.kanji}</h1>
			{kanjiWord.grade}
		</>
	);
};

export default KanjiWordComponent;
