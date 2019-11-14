import React from "react";

import Arrow from './Arrow';
import { Arrows } from './enums';
import ImageList from './ImageList';

import { CarouselContainer } from './CarouselStyles';

export default function Carousel() {

	return (
		<CarouselContainer>
			<Arrow arrow={Arrows.Left} />
        <ImageList />
			<Arrow arrow={Arrows.Right} />
    </CarouselContainer>
	);
}
