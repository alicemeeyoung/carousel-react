import React from 'react';

import Dot from './Dot';

type dotsProps = {
  imageAPI: any;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export default function Dots({
  imageAPI,
  setCurrentImageId,
  imageRef
}: dotsProps) {
  return (
    <dl>
      {imageAPI.map((image: any) => {
        const { id }: { id: number } = image;
        return (
          <Dot
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
