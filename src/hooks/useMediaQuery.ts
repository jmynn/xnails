'use client';
import { useSyncExternalStore } from 'react';

type TypeQuery = `(${string})`;
type TypeHookMedia = (query: TypeQuery) => boolean;
type TypeCallback = () => void;

const useMediaQuery: TypeHookMedia = (query) => {
  const getSnapshot = () => window.matchMedia(query).matches;

  const subscribe = (cb: TypeCallback) => {
    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener('change', cb);
    return () => mediaQueryList.removeEventListener('change', cb);
  };

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
};

export default useMediaQuery;
