import * as React from 'react';
import styled from '../../styled';
import { colors, Color } from '../../theme';
import { darken, fade } from '../../utils/color';

type Varient = 'default' | 'outlined' | 'contained';

interface ButtonProps {
  varient: Varient;
  color: Color;
  disabled: boolean;
}

interface ButtonBaseProps {
  color: string;
}

const ButtonBase = styled('button')<ButtonBaseProps>`
  font-weight: 500;
  font-size: 16px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px 24px;
  color: ${({ color }) => color};

  :hover:enabled {
    background: ${({ color }) => fade(color, 0.9)};
  }

  :target,
  :focus {
    background: pink;
  }

  :disabled {
    opacity: 0.5;
  }
`;

const OutlinedButton = styled(ButtonBase)<ButtonBaseProps>`
  border-color: ${({ color }) => color};
  background: white;

  :hover:enabled {
    border-color: ${({ color }) => darken(color, 0.2)};
    color: ${({ color }) => darken(color, 0.2)};
  }
`;

const ContainedButton = styled(ButtonBase)<ButtonBaseProps>`
  color: white;
  background: ${({ color }) => color};

  :hover:enabled {
    background: ${({ color }) => darken(color, 0.2)};
  }
`;

export class Button extends React.PureComponent<ButtonProps> {
  static defaultProps = {
    color: 'neutral',
    varient: 'default',
    disabled: false,
  };

  render() {
    const { varient, children, color, ...other } = this.props;
    const btnColor = colors[color];

    switch (varient) {
      case 'outlined':
        return (
          <OutlinedButton type="button" color={btnColor} {...other}>
            {children}
          </OutlinedButton>
        );
      case 'contained':
        return (
          <ContainedButton type="button" color={btnColor} {...other}>
            {children}
          </ContainedButton>
        );
      default:
        return (
          <ButtonBase type="button" color={btnColor} {...other}>
            {children}
          </ButtonBase>
        );
    }
  }
}

export default Button;
