import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import Image from './Image';
import { imageAPI } from './imageAPI';

const listStyles = css({
	display: 'flex'
});

export default function ImageList({ currentImageId }: { currentImageId: number }) {
	return (
		<dl css={listStyles}>
			{imageAPI.map((item: any, index: number) => {
				const { id } = item;

				return <Image key={id} currentImageId={currentImageId} />;
			})}
		</dl>
	);
}
