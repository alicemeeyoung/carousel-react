import React from 'react';

import Dot from './Dot';

type dotsProps = {
  imageAPI: any;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
};

export default function Dots({ imageAPI, setCurrentImageId }: dotsProps) {
  const allImages = Object.values(imageAPI);
  return (
    <dl>
      {allImages.map((image: any) => {
        const { id }: { id: number } = image;
        return <Dot key={id} id={id} setCurrentImageId={setCurrentImageId} />;
      })}
    </dl>
  );
}
