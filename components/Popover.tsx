import React from 'react';
import Popover from 'react-bootstrap/Popover';

type PopOverType = {
	title: string | undefined;
	bodyContent: string | undefined;
	idContent: string | undefined;
};

const PopoverComponent = ({ title, bodyContent, idContent }: PopOverType) => {
	return (
		<Popover id={`${idContent}`}>
			<Popover.Title className="text-capitalize">{title}</Popover.Title>
			<Popover.Content className="text-capitalize">
				{bodyContent}
			</Popover.Content>
		</Popover>
	);
};

export default PopoverComponent;
