import React, { useState, useRef, createRef } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Arrow from './Arrow';
import ImageList from './ImageList';
import Dots from './Dots';
import { Arrows } from './enums';
import { imageAPI, API } from './imageAPI';
import { CarouselContainer, DotsContainer, ScrollBar } from './CarouselStyles';

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
        <ImageList
          imageListRef={imageListRef}
          imageRef={imageRef}
          currentImageId={currentImageId}
        />
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
          imageRef={imageRef}
          imageAPI={imageAPI}
          setCurrentImageId={setCurrentImageId}
        />
      </DotsContainer>
    </div>
  );
}
