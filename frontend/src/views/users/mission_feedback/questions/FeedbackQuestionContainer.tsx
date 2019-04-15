import * as React from 'react';
import Row from 'reactstrap/lib/Row';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Row className="mt-3">
      {children}
    </Row>
  );
};
