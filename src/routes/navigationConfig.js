import React from 'react';
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
    icon: <QuestionOutlined style={{ fontSize: '23px' }} />,
  },
  {
    to: paths.opportunities,
    langPath: 'opportunities',
    icon: <RiseOutlined style={{ fontSize: '21px' }} />,
  },
  {
    to: paths.resources,
    langPath: 'resources',
    icon: <BookOutlined style={{ fontSize: '20px' }} />,
  },
  {
    to: paths.projects,
    langPath: 'projects',
    icon: <BuildOutlined style={{ fontSize: '21px' }} />,
  },
  {
    to: outerPaths,
    outer: true,
    langPath: 'community',
    icon: <TeamOutlined style={{ fontSize: '21px' }} />,
  },
  {
    to: paths.buy,
    langPath: 'buy',
    icon: <ShoppingCartOutlined style={{ fontSize: '23px' }} />,
  },
];
