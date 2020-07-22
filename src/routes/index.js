import { baseRoutes } from './baseRoutes';
import BaseTemplate from 'templates/BaseTemplate';

export const routes = [
  {
    path: '/',
    routes: baseRoutes,
    component: BaseTemplate,
  },
];
