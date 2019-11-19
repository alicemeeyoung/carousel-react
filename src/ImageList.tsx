import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Image from './Image';
import { imageAPI } from './imageAPI';
import {ImageListStyle} from './CarouselStyles'


export default function ImageList({ currentImageId }: { currentImageId: number }) {
	return (
		<ImageListStyle>
			{imageAPI.map((item: any, index: number) => {
				const { id, src } = item;

				// return <Image key={id} currentImageId={currentImageId} />;
				return <Image key={id} source={src} />
			})}
		</ImageListStyle>
	);
}
