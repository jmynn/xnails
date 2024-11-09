'use client';
import { $PRICE, TypeKeyPrice } from '@/data';
import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState
} from 'react';

type Props = {
  children: ReactNode;
};
type Context = {
  keysPrice: TypeKeyPrice[];
  activeTab: TypeKeyPrice;
  handleActive: (tab: TypeKeyPrice) => void;
};

export const PriceContext = createContext<Context>({} as Context);

const PriceProvider: FunctionComponent<Props> = ({ children }): ReactNode => {
  const keysPrice = useMemo(() => Object.keys($PRICE) as TypeKeyPrice[], []);
  const [activeTab, setActiveTab] = useState(keysPrice[0]);
  const handleActive = useCallback(
    (tab: TypeKeyPrice) => setActiveTab(tab),
    []
  );

  const valueContext = useMemo(
    () => ({ keysPrice, activeTab, handleActive }),
    [keysPrice, activeTab, handleActive]
  );

  return (
    <PriceContext.Provider value={valueContext}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceProvider;
