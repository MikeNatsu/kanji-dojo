import React from 'react';
import { KanjiWordType } from '../../pages/kanji';

const KanjiWordComponent = ({ kanjiWord }: { kanjiWord: KanjiWordType }) => {
	return (
		<div className="container">
			<h1 className="fs-1">
				<span className="badge bg-secondary">{kanjiWord.kanji}</span>
				{kanjiWord.meanings.length !== 0 && (
					<span className="text-capitalize">{` - ${kanjiWord.meanings[0]}`}</span>
				)}
			</h1>

			<div className="d-flex p-5">
				<ul className="list-group">
					{kanjiWord.name_readings.length !== 0 && (
						<li className="list-group-item btn-group">
							{kanjiWord.name_readings.map((name, index) => {
								return <button key={index.toString()} className="btn btn-secondary">{name}</button>;
							})}
						</li>
					)}
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

					{kanjiWord.meanings.length !== 0 && (
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
