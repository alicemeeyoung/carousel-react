import React, { useState } from 'react';

export default function Image() {
  const [imageId, setImageId] = useState<number>(0);
  return (
  <img src="/john_things_hired.png" width="80%"/>
  );
}
