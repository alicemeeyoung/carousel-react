import React from 'react';

import Image from './Image';
import { imageAPI } from './imageAPI';

export default function ImageList() {
  return (imageAPI.map((item, index) => {
        const {id, src} = item;
        return <Image key={id} source={src}/>
      })
    )
}
