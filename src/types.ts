import { Arrows } from './enums';

// Props
export type arrowProps = {
  arrow: Arrows;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  currentImageId: number;
  lengthOfAPI?: number;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export type dotProps = {
  id: number;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};

export type dotsProps = {
  imageAPI: any;
  setCurrentImageId: React.Dispatch<React.SetStateAction<number>>;
  imageRef: React.MutableRefObject<React.RefObject<HTMLImageElement>[]>;
};
