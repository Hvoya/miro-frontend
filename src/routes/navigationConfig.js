import {
  QuestionOutlined,
  RiseOutlined,
  BookOutlined,
  BuildOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

import paths, { outerPaths } from './paths';

export default [
  {
    to: paths.about,
    langPath: 'about',
    icon: QuestionOutlined,
  },
  {
    to: paths.opportunities,
    langPath: 'opportunities',
    icon: RiseOutlined,
  },
  {
    to: paths.resources,
    langPath: 'resources',
    icon: BookOutlined,
  },
  {
    to: paths.projects,
    langPath: 'projects',
    icon: BuildOutlined,
  },
  {
    to: outerPaths,
    outer: true,
    langPath: 'community',
    icon: TeamOutlined,
  },
  {
    to: paths.buy,
    langPath: 'buy',
    icon: ShoppingCartOutlined,
  },
];
