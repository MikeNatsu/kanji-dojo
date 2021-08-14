import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export type DropdownType = {
	title: string;
	items: string[];
	setter?: (keyword: string) => void;
};

const DropdownComponent = ({ title, items, setter }: DropdownType) => {
	return (
		<DropdownButton title={title} className="text-capitalize" variant="secondary">
			{items.map((item) => (
				<Dropdown.Item
					className="text-capitalize"
					onClick={() => {
						if (setter) {
							setter(item);
						}
					}}
				>
					{item}
				</Dropdown.Item>
			))}
		</DropdownButton>
	);
};

export default DropdownComponent;
