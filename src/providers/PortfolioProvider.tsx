'use client';
import { $PORTFOLIO_URL } from '@/data';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  createContext,
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from 'react';

type Props = {
  children: ReactNode;
};
type Context = {
  urls: string[] | null;
  countPic: number;
};

const COUNT_PIC = {
  MOBILE: 4,
  TABLET: 7,
  LAPTOP: 8
} as const;
export const PortfolioContext = createContext<Context>({} as Context);

const PortfolioProvider: FunctionComponent<Props> = ({
  children
}): ReactNode => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1441px)');
  const [countPic, setCountPic] = useState<number>(COUNT_PIC.MOBILE);
  const urls = useMemo(() => {
    if (countPic > $PORTFOLIO_URL.length || countPic < 0) return null;
    const slicedUrls = $PORTFOLIO_URL.slice(0, countPic);
    return slicedUrls;
  }, [countPic]);

  useEffect(() => {
    if (!isTablet && !isLarge) {
      setCountPic(COUNT_PIC.MOBILE);
      return;
    }
    if (isTablet && !isLarge) {
      setCountPic(COUNT_PIC.TABLET);
      return;
    }
    if (isLarge) {
      setCountPic(COUNT_PIC.LAPTOP);
      return;
    }
  }, [isTablet, isLarge]);

  const valueContext = useMemo<Context>(
    () => ({ countPic, urls }),
    [countPic, urls]
  );
  return (
    <PortfolioContext.Provider value={valueContext}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
