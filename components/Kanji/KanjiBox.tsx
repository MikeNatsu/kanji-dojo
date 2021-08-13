import React from 'react';
import kanjiStyles from '../../styles/Kanji.module.scss';
import Link from 'next/link';

const KanjiBox = ({ kanji }: { kanji: string }) => {
	return (
		<Link href={`kanji/${kanji}`}>
			<div className="bg-secondary p-4 kanjiWord">
				<span className={kanjiStyles.kanjiWord}>{kanji}</span>
			</div>
		</Link>
	);
};

export default KanjiBox;
