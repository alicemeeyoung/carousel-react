import React from 'react';

import Image from './Image';
import { imageAPI } from './imageAPI';

export default function ImageList() {
  const imagesAsList = (imageAPI.map((item, index) => {
        const {id, src} = item;
        return <li><Image key={id} source={src}/></li>
      })
    )

  return <ul>{imagesAsList}</ul>
}
