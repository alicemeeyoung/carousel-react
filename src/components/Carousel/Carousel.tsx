import React, { useState, useRef, createRef, useEffect } from 'react';
import Arrow from './Arrow/Arrow';
import ImageList from './Images/ImageList';
import Dots from './Dots/Dots';
import { Arrows } from './enums';
import { ImageRefType, API } from './types';
import { CarouselContainer, DotsContainer } from './CarouselStyles';

export default function Carousel({ imageAPI }: { imageAPI: API[] }) {
  const [ currentImageId, setCurrentImageId ] = useState<number>(0);
  const lengthOfAPI: number = Object.keys(imageAPI).length;
  // Create refs
  const imageRef: ImageRefType = useRef(imageAPI.map(() => createRef()));
  const imageListRef: React.MutableRefObject<null> = useRef(null);
  return (
    <div className="carousel">
      <CarouselContainer>
        <Arrow
          imageRef={imageRef}
          arrow={Arrows.Left}
          setCurrentImageId={setCurrentImageId}
          currentImageId={currentImageId}
          lengthOfAPI={lengthOfAPI}
        />
        <ImageList imageAPI={imageAPI} imageListRef={imageListRef} imageRef={imageRef} />
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
