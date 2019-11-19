import React from 'react';

import { Arrows } from './enums';
import { ArrowStyles } from './CarouselStyles';

type arrowProps = {
    arrow: Arrows;
    setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
    currentImageId: number;
    lengthOfAPI?: number;
};

export default function Arrow({ arrow, setCurrentImageId, currentImageId, lengthOfAPI }: arrowProps) {
    return arrow === 'left' ? (
        <ArrowStyles onClick={() => (currentImageId !== 0 ? setCurrentImageId(currentImageId - 1) : null)}>
            <img src="/arrow_left.png" alt="Left arrow" />
        </ArrowStyles>
    ) : (
        <ArrowStyles
            onClick={() =>
                lengthOfAPI && currentImageId < lengthOfAPI - 1 ? setCurrentImageId(currentImageId + 1) : null}
        >
            <img src="/arrow_right.png" alt="Right arrow" />
        </ArrowStyles>
    );
}
