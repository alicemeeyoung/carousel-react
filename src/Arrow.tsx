import React from 'react';

import { Arrows } from './enums';
import { imageAPI } from './imageAPI';

type arrowProps = {
	arrow: Arrows;
	setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
	currentImageId: number;
};

export default function Arrow({ arrow, setCurrentImageId, currentImageId }: arrowProps) {
	const lengthOfAPI: number = Object.keys(imageAPI).length;
	console.log({ lengthOfAPI }, { currentImageId });
	return arrow === 'left' ? (
		<button
			className="left-arrow"
			onClick={() => (currentImageId !== 0 ? setCurrentImageId(currentImageId - 1) : null)}
		>
			<img src="/arrow_left.png" />
		</button>
	) : (
		<button
			className="right-arrow"
			onClick={() => (currentImageId < lengthOfAPI - 1 ? setCurrentImageId(currentImageId + 1) : null)}
		>
			<img src="/arrow_right.png" />
		</button>
	);
}
