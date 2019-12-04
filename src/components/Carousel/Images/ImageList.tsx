import React from 'react';
import Image from './Image';
// import { imageAPI } from '../../../imageAPI';
import { ImageListStyle } from '../CarouselStyles';
import { imageListProps } from '../types';

export default function ImageList({ imageRef, imageListRef, imageAPI }: imageListProps) {
  return (
    <ImageListStyle ref={imageListRef}>
      {imageAPI.map((item: any, index: number) => {
        const { id, src } = item;
        return <Image imageRef={imageRef} key={id} source={src} index={index} />;
      })}
    </ImageListStyle>
  );
}
