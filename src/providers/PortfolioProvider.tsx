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

const COUNT_PIC = 4;
export const PortfolioContext = createContext<Context>({} as Context);

const PortfolioProvider: FunctionComponent<Props> = ({
  children
}): ReactNode => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isLarge = useMediaQuery('(min-width: 1441px)');
  const [countPic, setCountPic] = useState<number>(COUNT_PIC);
  const urls = useMemo(() => {
    if (countPic > $PORTFOLIO_URL.length || countPic < 0) return null;
    const slicedUrls = $PORTFOLIO_URL.slice(0, countPic);
    return slicedUrls;
  }, [countPic]);

  useEffect(() => {
    if (isTablet && !isLarge) {
      setCountPic(7);
      return;
    }
    if (isLarge) {
      setCountPic(8);
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
