import { FunctionComponent, ReactNode } from 'react';

type Props = {
  direction: 'left' | 'right';
};

const IconArrowCarousel: FunctionComponent<Props> = ({
  direction
}): ReactNode => {
  if (direction === 'left') {
    return (
      <svg viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 1L1 17.5L18 34" stroke="black" />
      </svg>
    );
  }
  if (direction == 'right') {
    return (
      <svg viewBox="0 0 19 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L18 17.5L1 34" stroke="black" />
      </svg>
    );
  }
};

export default IconArrowCarousel;
