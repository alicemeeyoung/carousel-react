import React, { useState } from 'react';

import { imageAPI } from './imageAPI';

// export default function Image({source}: {source: string}) {
//   return (
//   <img src={source} width="80%" alt="" />
//   );
// }

export default function Image({ currentImageId }: { currentImageId: number }) {
	const { src: matchingImgSrc }: { src: string } = imageAPI[currentImageId];

	return <img src={matchingImgSrc} width="80%" alt="" />;
}
