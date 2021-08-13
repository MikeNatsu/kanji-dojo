import React from 'react';
import { KanjiWord } from '../../pages/kanji';

const KanjiWordComponent = ({ kanjiWord }: { kanjiWord: KanjiWord }) => {
	return (
		<div className="container">
			<h1>{kanjiWord.kanji}</h1>
			{kanjiWord.grade}
		</div>
	);
};

export default KanjiWordComponent;
