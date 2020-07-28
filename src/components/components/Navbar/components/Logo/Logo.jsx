import React, { memo } from 'react';

import { Icon, SArrowBlock, SRoot } from './Atoms';
import { zIndexes } from '@/enums/zIndexes';

const Logo = () => {
  return (
    <SRoot zIndex={zIndexes.navbar.logo}>
      MIRO
      <SArrowBlock>
        <Icon />
      </SArrowBlock>
    </SRoot>
  );
};

export default memo(Logo);
