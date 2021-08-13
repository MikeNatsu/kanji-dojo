import React from 'react';
import { KanjiWordType } from '../../pages/kanji';

const KanjiWordComponent = ({ kanjiWord }: { kanjiWord: KanjiWordType }) => {
	return (
		<div className="container">
			<h1 className="fs-1">
				<span className="badge bg-secondary">{kanjiWord.kanji}</span> -{' '}
				{kanjiWord.meanings[0]}
			</h1>

			<div className="d-flex p-5">
				<ul className="list-group">
					{kanjiWord.grade && (
						<li className="list-group-item">
							<b>Grade: </b>
							{kanjiWord.grade}
						</li>
					)}
					{kanjiWord.unicode && (
						<li className="list-group-item">
							<b>Unicode: </b>
							{kanjiWord.unicode}
						</li>
					)}

					{kanjiWord.meanings && (
						<li className="list-group-item">
							<b>Meanings: </b>
							{kanjiWord.meanings.join(', ')}
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default KanjiWordComponent;
