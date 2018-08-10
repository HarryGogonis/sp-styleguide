import * as React from 'react';

import styled from '../../styled';

export const Base = styled('div')`
  background: #fff;
  border-bottom: 3px solid #eff3f6;
`;

const Indicator = styled('div')`
  height: 3px;
`;

export class Tabs extends React.PureComponent {
  render() {
    return (
      <Base>
        <Indicator />
      </Base>
    );
  }
}
