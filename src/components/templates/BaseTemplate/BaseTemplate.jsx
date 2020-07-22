import React from 'react';
import { renderRoutes } from 'react-router-config';

import NavigationController from '@/components/containers/NavigationController';

const BaseTemplate = ({ route }) => {
  return (
    <div>
      <NavigationController />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default React.memo(BaseTemplate);
