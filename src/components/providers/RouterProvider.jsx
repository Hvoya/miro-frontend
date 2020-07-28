import React, { memo } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default memo(RouterProvider);
