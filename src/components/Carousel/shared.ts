export const scrollTo = (ref: React.RefObject<HTMLImageElement>): void => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
