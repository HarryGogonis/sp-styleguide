import * as React from 'react';

import styled from '../../styled';
import { Tab } from '../Tab';

interface TabsProps {
  value: number;
  children: Tab[];
}

const Base = styled('div')`
  background: #fff;
  border-bottom: 3px solid #eff3f6;
`;

export class Tabs extends React.PureComponent<TabsProps> {
  getChildren() {
    const { children, value } = this.props;
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          active: index === value,
        });
      }
      return null;
    });
  }

  render() {
    const children = this.getChildren();
    return (
      <Base>
        <div>{children}</div>
      </Base>
    );
  }
}
