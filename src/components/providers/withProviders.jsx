import React from 'react';

import ReduxProvider from './ReduxProvider';
import LangProvider from './LangProvider';
import RouterProvider from './RouterProvider';
import BaseStylingProvider from './BaseStylingProvider';
import ThemeProvider from './ThemeProvider';

const withProviders = (Wrapped) => {
  return function AppWithProviders() {
    return (
      <BaseStylingProvider>
        <ReduxProvider>
          <ThemeProvider>
            <RouterProvider>
              <LangProvider>
                <Wrapped />
              </LangProvider>
            </RouterProvider>
          </ThemeProvider>
        </ReduxProvider>
      </BaseStylingProvider>
    );
  };
};

export default withProviders;
