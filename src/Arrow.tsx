import React from 'react';

import { Arrows } from './enums';
import { imageAPI } from './imageAPI';

type arrowProps = {
	arrow: Arrows;
	setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
	currentImageId: number;
	lengthOfAPI?: number;
};

export default function Arrow({ arrow, setCurrentImageId, currentImageId, lengthOfAPI }: arrowProps) {
	return arrow === 'left' ? (
		<button
			className="left-arrow"
			onClick={() => (currentImageId !== 0 ? setCurrentImageId(currentImageId - 1) : null)}
		>
			<img src="/arrow_left.png" alt="Left arrow" />
		</button>
	) : (
		<button
			className="right-arrow"
			onClick={() =>
				lengthOfAPI && currentImageId < lengthOfAPI - 1 ? setCurrentImageId(currentImageId + 1) : null}
		>
			<img src="/arrow_right.png" alt="Right arrow" />
		</button>
	);
}
