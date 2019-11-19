import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Image from './Image';
import { imageAPI, API } from './imageAPI';
import {ImageListStyle} from './CarouselStyles'


export default function ImageList({ currentImageId, refElement }: 
	{ currentImageId: number, refElement: React.MutableRefObject<React.RefObject<HTMLImageElement>[]> }) {
	return (
		<ImageListStyle>
			{imageAPI.map((item: any, index: number) => {
				const { id, src } = item;

				// return <Image key={id} currentImageId={currentImageId} />;
				return <Image refElement={refElement} key={id} source={src} index={index} />
			})}
		</ImageListStyle>
	);
}
