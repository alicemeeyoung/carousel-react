import React from 'react';

import Dot from './Dot';

export default function Dots({ imageAPI }: { imageAPI: any }) {
	const allImages = Object.values(imageAPI);
	return (
		<dl>
			{allImages.map((image: any) => {
				const { id }: { id: number } = image;
				return <Dot key={id} />;
			})}
		</dl>
	);
}
