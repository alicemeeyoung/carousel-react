import React, { useRef, createRef } from 'react';

import Dot from './Dot';

type dotsProps = {
  imageAPI: any;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
  imageRef: React.MutableRefObject<null>;
};

export default function Dots({
  imageAPI,
  setCurrentImageId,
  refElement,
  imageRef
}: dotsProps) {
  // const refElement = useRef(imageAPI.map(() => createRef()));

  return (
    <dl>
      {imageAPI.map((image: any) => {
        const { id }: { id: number } = image;
        return (
          <Dot
            imageRef={imageRef}
            refElement={refElement}
            key={id}
            id={id}
            setCurrentImageId={setCurrentImageId}
          />
        );
      })}
    </dl>
  );
}
