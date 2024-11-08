'use client';

import { $PROMO_CARDS } from '@/data';
import {
    createContext,
    FunctionComponent,
    ReactNode,
    useEffect,
    useState
} from 'react';

type Props = {
  children: ReactNode;
};

const initialPosition = 0;
const maxPosition = $PROMO_CARDS.length - 1;
export const PromoContext = createContext(initialPosition);

const PromoProvider: FunctionComponent<Props> = ({ children }): ReactNode => {
  const [position, setPosition] = useState<number>(initialPosition);

  useEffect(() => {
    setTimeout(() => {
      setPosition((currentPosition) => {
        if (!(currentPosition + 1 > maxPosition)) {
          return currentPosition + 1;
        } else {
          return initialPosition;
        }
      });
    }, 5000);
  }, [position]);

  return (
    <PromoContext.Provider value={position}>{children}</PromoContext.Provider>
  );
};

export default PromoProvider;
