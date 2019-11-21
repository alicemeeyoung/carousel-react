import React, { useState, useRef, createRef } from 'react';
import Arrow from './Arrow/Arrow';
import ImageList from './Images/ImageList';
import Dots from './Dots/Dots';
import { Arrows } from './enums';
import { imageAPI } from '../../imageAPI';
import { CarouselContainer, DotsContainer } from './CarouselStyles';

export default function Carousel() {
  const [currentImageId, setCurrentImageId] = useState<number>(0);
  const lengthOfAPI: number = Object.keys(imageAPI).length;

  // Create refs
  const imageRef: React.MutableRefObject<React.RefObject<
    HTMLImageElement
  >[]> = useRef(imageAPI.map(() => createRef()));
  const imageListRef: React.MutableRefObject<null> = useRef(null);

  return (
    <div css={{ width: '50%', margin: 'auto' }} className="carousel">
      <CarouselContainer>
        <Arrow
          imageRef={imageRef}
          arrow={Arrows.Left}
          setCurrentImageId={setCurrentImageId}
          currentImageId={currentImageId}
        />
        <ImageList imageListRef={imageListRef} imageRef={imageRef} />
        <Arrow
          imageRef={imageRef}
          arrow={Arrows.Right}
          setCurrentImageId={setCurrentImageId}
          currentImageId={currentImageId}
          lengthOfAPI={lengthOfAPI}
        />
      </CarouselContainer>
      <DotsContainer>
        <Dots
          currentImageId={currentImageId}
          imageRef={imageRef}
          imageAPI={imageAPI}
          setCurrentImageId={setCurrentImageId}
        />
      </DotsContainer>
    </div>
  );
}
