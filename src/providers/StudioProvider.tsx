'use client';
import { $INFO_STUDIOS } from '@/data';
import { TypeStudioInfo } from '@/types';
import {
  FunctionComponent,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState
} from 'react';

type TypeTabId = TypeStudioInfo['_id'];
type Props = {
  children: ReactNode;
};

type Context = {
  handleActive: (tabId: TypeTabId) => void;
  currentTab: TypeTabId;
  tabs: Pick<TypeStudioInfo, '_id' | '_title'>[];
};

export const StudioContext = createContext<Context>({} as Context);

const StudioProvider: FunctionComponent<Props> = ({ children }): ReactNode => {
  const tabs = useMemo(
    () => $INFO_STUDIOS.map(({ _id, _title }) => ({ _id, _title })),
    []
  );
  const [currentTab, setCurrentTab] = useState<TypeTabId>(tabs[0]._id);
  const handleActive = useCallback(
    (tabId: TypeTabId) => setCurrentTab(tabId),
    []
  );

  const valueContext = useMemo(
    () => ({ handleActive, currentTab, tabs }),
    [handleActive, currentTab, tabs]
  );

  return (
    <StudioContext.Provider value={valueContext}>
      {children}
    </StudioContext.Provider>
  );
};

export default StudioProvider;
