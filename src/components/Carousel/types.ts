import { Arrows } from './enums';

// Props
export type imageListProps = {
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
  imageListRef: React.MutableRefObject<null>;
};

export type imageProps = {
  source?: string;
  index: number;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export type arrowProps = {
  arrow: Arrows;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  currentImageId: number;
  lengthOfAPI: number;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export type dotProps = {
  id: number;
  currentImageId: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export type dotsProps = {
  imageAPI: any;
  currentImageId: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};
