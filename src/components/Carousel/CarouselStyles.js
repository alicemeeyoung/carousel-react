/** @jsx, jsx */
import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowStyles = styled.button`
  height: 25%;
  margin: auto;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

const noOutline = css({
  outline: 0
});

export const DotButton = styled.button(props => ({
  border: '1px solid black',
  borderRadius: '50%',
  width: '1rem',
  height: '1rem',
  margin: '0.2rem',
  cursor: 'pointer',
  backgroundColor: props.pressed ? 'black' : 'none',
  ':focus': noOutline
}));

export const ImageStyle = styled.img`
  scroll-snap-align: start;
`;

export const ImageListStyle = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1 rem;
  list-style: none;

  overflow-x: auto:
  overflow-y: hidden;s
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
