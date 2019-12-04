import React from 'react';

import Dot from './Dot';
import { dotsProps } from '../types';

export default function Dots({ imageAPI, setCurrentImageId, imageRef, currentImageId }: dotsProps) {
  return (
    <dl>
      {imageAPI.map((image: any) => {
        const { id }: { id: number } = image;
        // console.log(imageRef);
        return (
          <Dot
            currentImageId={currentImageId}
            imageRef={imageRef}
            key={id}
            id={id}
            setCurrentImageId={setCurrentImageId}
          />
        );
      })}
    </dl>
  );
}
