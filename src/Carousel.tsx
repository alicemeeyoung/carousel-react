import React, { useState } from 'react';

import Arrow from './Arrow';
import { Arrows } from './enums';
// import ImageList from './ImageList';
import Image from './Image';

import { CarouselContainer } from './CarouselStyles';

export default function Carousel() {
	const [ currentImageId, setCurrentImageId ] = useState<number>(0);
	return (
		<CarouselContainer>
			<Arrow arrow={Arrows.Left} setCurrentImageId={setCurrentImageId} currentImageId={currentImageId} />
			{/* <ImageList currentImageId={currentImageId} /> */}
			<Image currentImageId={currentImageId} />
			<Arrow arrow={Arrows.Right} setCurrentImageId={setCurrentImageId} currentImageId={currentImageId} />
		</CarouselContainer>
	);
}
