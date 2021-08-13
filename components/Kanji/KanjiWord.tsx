import React from 'react';
import { KanjiWord } from '../../pages/kanji';

const KanjiWordComponent = ({ kanjiWord }: { kanjiWord: KanjiWord }) => {
	return (
		<div className="container">
			<span className="fs-1">
				{kanjiWord.kanji} - {kanjiWord.meanings[0]}
			</span>
			<div className="d-flex border p-5">
				<ul className="list-group">
					<li className="list-group-item">{kanjiWord.grade}</li>
					<li className="list-group-item">{kanjiWord.unicode}</li>
					<li className="list-group-item">{kanjiWord.meanings.join(' ')}</li>
				</ul>
			</div>
		</div>
	);
};

export default KanjiWordComponent;
