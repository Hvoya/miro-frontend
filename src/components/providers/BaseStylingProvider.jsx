import { memo } from 'react';

import 'antd/dist/antd.css';
import 'normalize.css/normalize.css';
import 'reset.css/reset.css';
import '@/assets/css/base.css';

const BaseStylingProvider = ({ children }) => {
  return children;
};

export default memo(BaseStylingProvider);
