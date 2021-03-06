import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MemoryRouterProps } from 'react-router';
import { InitialEntry } from 'history';
import { render as _render, RenderOptions, RenderResult } from '@testing-library/react';
import { merge, Theme, ThemeProvider } from 'theme-ui';
import { PartialTheme } from '@functionary/ui-react';

import DefaultTheme from 'src/themes';

export * from '@testing-library/react';

interface TestWrapperProps {
  // It will be merged with the default "base" preset, so any property is optional
  theme?: PartialTheme;
  route?: InitialEntry;
}

interface RenderWithThemeOptions extends RenderOptions, MemoryRouterProps, TestWrapperProps {}

const TestWrapper = ({ theme, route, ...props }: TestWrapperProps): JSX.Element => {
  // TODO: remove those ugly types assertions once 'merge' is fixed upstream
  // (merge currently accepts only 2 'complete' themes)
  const mergedTheme = merge(DefaultTheme, (theme as Theme) || {});

  return (
    <MemoryRouter initialEntries={[route || '/']}>
      <ThemeProvider {...props} theme={mergedTheme} />
    </MemoryRouter>
  );
};

export const render = (ui: React.ReactElement, options?: RenderWithThemeOptions): RenderResult =>
  _render(ui, {
    wrapper: (props) => <TestWrapper {...props} route={options?.route} theme={options?.theme} />,
    ...options,
  });
