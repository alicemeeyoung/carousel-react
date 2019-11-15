import React, { useState } from 'react';

import Arrow from './Arrow';
import Image from './Image';
import Dots from './Dots';
import { Arrows } from './enums';
import { imageAPI } from './imageAPI';

import { CarouselContainer, DotsContainer } from './CarouselStyles';

export default function Carousel() {
	const [ currentImageId, setCurrentImageId ] = useState<number>(0);
	const lengthOfAPI: number = Object.keys(imageAPI).length;
	return (
		<div className="carousel">
			<CarouselContainer>
				<Arrow arrow={Arrows.Left} setCurrentImageId={setCurrentImageId} currentImageId={currentImageId} />
				<Image currentImageId={currentImageId} />
				<Arrow
					arrow={Arrows.Right}
					setCurrentImageId={setCurrentImageId}
					currentImageId={currentImageId}
					lengthOfAPI={lengthOfAPI}
				/>
			</CarouselContainer>
			<DotsContainer>
				<Dots imageAPI={imageAPI} />
			</DotsContainer>
		</div>
	);
}
