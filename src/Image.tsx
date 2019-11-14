import React, { useState } from 'react';

export default function Image() {
  const [imageId, setImageId] = useState<number>(0);
  return <div>Hello world from Image</div>;
}
