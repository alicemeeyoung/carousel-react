import { Arrows } from './enums';

// Props
export type imageListProps = {
  imageRef: ImageRefType;
  imageListRef: React.MutableRefObject<null>;
  imageAPI: API[];
};

export type imageProps = {
  source?: string;
  index: number;
  imageRef: ImageRefType;
};

export type arrowProps = {
  arrow: Arrows;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  currentImageId: number;
  lengthOfAPI: number;
  imageRef: ImageRefType;
};

export type dotProps = {
  id: number;
  currentImageId: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: ImageRefType;
};

export type dotsProps = {
  imageAPI: any;
  currentImageId: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: ImageRefType;
};

// Others
export type API = {
  id: number;
  src: string;
};

export type ImageRefType = React.MutableRefObject<React.RefObject<any>[]>;
