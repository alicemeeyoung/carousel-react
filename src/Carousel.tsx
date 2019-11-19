import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Arrow from './Arrow';
import ImageList from './ImageList';
import Image from './Image';
import Dots from './Dots';
import { Arrows } from './enums';
import { imageAPI } from './imageAPI';
import { CarouselContainer, DotsContainer, ScrollBar } from './CarouselStyles';

export default function Carousel() {
  const [ currentImageId, setCurrentImageId ] = useState<number>(0);

  const lengthOfAPI: number = Object.keys(imageAPI).length;
  return (
    <div css={{width:'50%', margin: 'auto'}} className="carousel">
      <CarouselContainer>
        <Arrow arrow={Arrows.Left} setCurrentImageId={setCurrentImageId} currentImageId={currentImageId} />
        <ImageList currentImageId={currentImageId} />
        {/* <Image /> */}
        <Arrow
          arrow={Arrows.Right}
          setCurrentImageId={setCurrentImageId}
          currentImageId={currentImageId}
          lengthOfAPI={lengthOfAPI}
        />
      </CarouselContainer>
      <DotsContainer>
        <Dots imageAPI={imageAPI} setCurrentImageId={setCurrentImageId} />
      </DotsContainer>
    </div>
  );
}
