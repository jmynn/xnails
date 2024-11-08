import { FunctionComponent, ReactNode } from 'react';
import PromoProvider from './PromoProvider';

type Props = {
  children: ReactNode;
};

const Providers: FunctionComponent<Props> = ({ children }): ReactNode => {
  return <PromoProvider>{children}</PromoProvider>;
};

export default Providers;
