import React from 'react';

import { Arrows } from './enums';

export default function Arrow({ arrow }: { arrow: Arrows }) {
  const style = {
    color: 'white'
  };
  return arrow === 'left' ? (
    <div className="left-arrow">
      <img src="/arrow_left.png" />
    </div>
  ) : (
    <div className="right-arrow">
      <img src="/arrow_right.png" />
    </div>
  );
}
