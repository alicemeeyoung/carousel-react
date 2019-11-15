import React from 'react';

import Image from './Image';
import { imageAPI } from './imageAPI';

export default function ImageList({ currentImageId }: { currentImageId: number }) {
	const imagesAsList = imageAPI.map((item: any, index: number) => {
		const { id, src } = item;

		return <li>{/* <Image key={id} source={src} /> */}</li>;
	});

	return <ul>{imagesAsList}</ul>;
}
