import React, { useState } from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';

export type DropdownType = {
	title: string;
	items: string[];
	setter?: (keyword: string) => void;
	activated?: string;
	defaultItem?: string;
};

const DropdownComponent = ({
	title,
	items,
	setter,
	defaultItem,
}: DropdownType) => {
	const [activated, setActivated] = useState<string | undefined>(defaultItem);
	return (
		<DropdownButton
			title={title}
			className="text-capitalize"
			variant="secondary"
		>
			{items.map((item) => (
				<Dropdown.Item
					className="text-capitalize"
					onClick={() => {
						if (setter) {
							setter(item);
							setActivated(item);
						}
					}}
					active={activated === item}
				>
					{item}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default DropdownComponent;
