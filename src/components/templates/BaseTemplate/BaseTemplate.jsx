import React from 'react';
import { renderRoutes } from 'react-router-config';

import NavigationContainer from 'containers/NavigationContainer';

const BaseTemplate = ({ route }) => {
  return (
    <div>
      <NavigationContainer />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default React.memo(BaseTemplate);
