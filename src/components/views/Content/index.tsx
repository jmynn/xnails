import { FunctionComponent, ReactNode } from 'react';
import Container from '@/components/ui/Container';

type Props = {
  children: ReactNode;
};

const Content: FunctionComponent<Props> = ({ children }) => {
  return (
    <div id="content">
      <Container>{children}</Container>
    </div>
  );
};

export default Content;
