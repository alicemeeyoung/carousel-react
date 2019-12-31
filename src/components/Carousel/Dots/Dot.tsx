import React from 'react';

import { DotButton } from '../CarouselStyles';
import { dotProps } from '../types';
import { scrollTo } from '../shared';

export default function Dot({ id, currentImageId, setCurrentImageId, imageRef }: dotProps) {
  const pressed = id === currentImageId;
  const handleDotClick = () => {
    scrollTo(imageRef.current[id]);
    setCurrentImageId(id);
  };

  return <DotButton pressed={pressed} onClick={handleDotClick} />;
}
