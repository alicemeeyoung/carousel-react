import React from 'react';
import Image from './Image';
import { ImageListStyle } from '../CarouselStyles';
import { imageListProps } from '../types';

export default function ImageList({ imageRef, imageAPI }: imageListProps) {
  return (
    <ImageListStyle>
      {imageAPI.map((item: any, index: number) => {
        const { id, src } = item;
        return <Image imageRef={imageRef} key={id} source={src} index={index} />;
      })}
    </ImageListStyle>
  );
}
