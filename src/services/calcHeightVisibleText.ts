'use client';
import { $VISIBLE_REVIEW_STRING as VISIBLE_STRING } from '@/data';

type TypeCalcCountVisibleString = (
  el: HTMLDivElement,
  funcCond?: () => void
) => number;

const calcCountVisibleString: TypeCalcCountVisibleString = (el, funcCond) => {
  const lineHeight = +window.getComputedStyle(el).lineHeight.split('px')[0];
  const height = Math.round(+window.getComputedStyle(el).height.split('px')[0]);
  const visibleHeight = Math.round(lineHeight * VISIBLE_STRING);

  console.table([
    ['lineHeight', lineHeight],
    ['height', height],
    ['visibleHeight', visibleHeight]
  ]);

  if (height <= visibleHeight) {
    const computeVisibleString = Math.round(height / lineHeight);
    if (funcCond) funcCond();
    return computeVisibleString;
  }
  return VISIBLE_STRING;
};

export default calcCountVisibleString;
