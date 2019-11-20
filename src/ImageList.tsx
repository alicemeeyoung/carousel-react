import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Image from './Image';
import { imageAPI, API } from './imageAPI';
import { ImageListStyle } from './CarouselStyles';

export default function ImageList({
  currentImageId,
  imageRef,
  imageListRef
}: {
  currentImageId: number;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
  imageListRef: React.MutableRefObject<null>;
}) {
  return (
    <ImageListStyle ref={imageListRef}>
      {imageAPI.map((item: any, index: number) => {
        const { id, src } = item;
        return (
          <Image imageRef={imageRef} key={id} source={src} index={index} />
        );
      })}
    </ImageListStyle>
  );
}
