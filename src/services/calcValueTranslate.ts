'use client';

type TypeCalcValueTranslate = (
  el: HTMLDivElement,
  isLarge: boolean,
  currentPositionCarousel: number
) => number;
const calcValueTranslate: TypeCalcValueTranslate = (
  el,
  isLarge,
  currentPositionCarousel
) => {
  const widthContainer = el.offsetWidth;
  const widthChild = +window
    .getComputedStyle(el.children[0])
    .width.split('px')[0];
  const gapCarousel = +window.getComputedStyle(el).gap.split('px')[0];
  const ratio = !isLarge ? 1 : 1.5;
  const calcWidthChildWithGap = widthChild * ratio + gapCarousel * 3;
  const percentTranslate =
    Math.round((calcWidthChildWithGap / widthContainer) * 100 * -1) *
    currentPositionCarousel;

  return percentTranslate;
};

export default calcValueTranslate;
