import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer className="d-flex justify-content-between bg-secondary text-white p-3 ">
			<div>
				<span>Contact: </span>
				<a href="https://github.com/MikeNatsu" rel="noref">
					<FontAwesomeIcon className="text-white" icon={faGithub} />
				</a>
			</div>
			<div>
				<span dangerouslySetInnerHTML={{ __html: '&copy;' }} />
				<span> Mike Natsu</span>
			</div>
		</footer>
	);
};

export default Footer;
