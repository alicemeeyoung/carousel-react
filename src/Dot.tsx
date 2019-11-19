import React from 'react';

import { DotButton } from './CarouselStyles';

export type dotProps = {
	id: number;
	setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
};

export default function Dot({ id, setCurrentImageId }: dotProps) {
	return <DotButton aria-pressed="false" onClick={() => setCurrentImageId(id)} />;
}
