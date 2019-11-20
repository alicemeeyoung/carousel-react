import React from 'react';

import { DotButton } from './CarouselStyles';
import { dotProps } from './types';
import { scrollTo } from './shared';

export default function Dot({ id, setCurrentImageId, imageRef }: dotProps) {
  const handleDotClick = () => {
    scrollTo(imageRef.current[id]);
    setCurrentImageId(id);
  };

  return <DotButton aria-pressed="false" onClick={handleDotClick} />;
}
