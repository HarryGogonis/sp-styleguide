import * as React from 'react';
import { Button } from '../Button';

type TabProps = {
  label: string;
  active: boolean;
};

export class Tab extends React.PureComponent<TabProps> {
  static defaultProps = {
    active: false,
  };

  getColor() {
    return this.props.active ? 'primary' : 'neutral';
  }

  render() {
    const { label } = this.props;
    const color = this.getColor();
    return <Button color={color}>{label}</Button>;
  }
}
