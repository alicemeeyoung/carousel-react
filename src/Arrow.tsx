import React from 'react';

import { Arrows } from './enums';

type arrowProps = {
	arrow: Arrows;
	setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
	currentImageId: number;
};

export default function Arrow({ arrow, setCurrentImageId, currentImageId }: arrowProps) {
	return arrow === 'left' ? (
		<button
			className="left-arrow"
			onClick={() => (currentImageId !== 0 ? setCurrentImageId(currentImageId - 1) : null)}
		>
			<img src="/arrow_left.png" />
		</button>
	) : (
		<button className="right-arrow" onClick={() => setCurrentImageId(currentImageId + 1)}>
			<img src="/arrow_right.png" />
		</button>
	);
}
