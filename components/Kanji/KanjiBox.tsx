import React, { useEffect, useState } from 'react';
import kanjiStyles from '../../styles/Kanji.module.scss';
import Link from 'next/link';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PopoverComponent from '../Popover';
import { KanjiWordType } from '../../pages/kanji';

const KanjiBox = ({ kanji }: { kanji: string }) => {
	const [kanjiWord, setKanjiWord] = useState<KanjiWordType>();

	const getKanjiInfo = async () => {
		const res = await fetch(
			`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(kanji)}`
		);
		const kanjiWordRes = await res.json();
		setKanjiWord(await kanjiWordRes);
	};

	useEffect(() => {
		getKanjiInfo();
	}, []);

	return (
		<div>
			<div className="d-flex m-4">
				<div className="py-2 px-4 rounded dark bg-secondary text-decoration-none symbolKanji">
					<Link href={`kanji/${kanji}`}>
						<a  >{kanji}</a>
					</Link>
				</div>
				<div className="flex-grow-1 fs-4 text-capitalize text-center">
					{kanjiWord?.meanings[0]}
				</div>
			</div>
			<hr />
		</div>
	);
};

export default KanjiBox;
