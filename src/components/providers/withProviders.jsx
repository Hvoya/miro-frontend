import React from 'react';

import ReduxProvider from './ReduxProvider';
import LangProvider from './LangProvider';

const withProviders = (Wrapped) => {
  return function AppWithProviders() {
    return (
      <ReduxProvider>
        <LangProvider>
          <Wrapped />
        </LangProvider>
      </ReduxProvider>
    );
  };
};

export default withProviders;
