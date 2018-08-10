import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../src/theme';

export default class Wrapper extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>;
  }
}
