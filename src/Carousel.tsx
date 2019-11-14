import React from 'react';

import Arrow from './Arrow';
import { Arrows } from './enums';

export default function Carousel() {
	return (
		<div className="carousel">
			<Arrow arrow={Arrows.Left} />
			Hello World
			<Arrow arrow={Arrows.Right} />
		</div>
	);
}
