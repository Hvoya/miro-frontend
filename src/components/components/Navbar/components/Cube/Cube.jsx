import React, { memo } from 'react';

import { SBottomShard, SRoot, STopLeftShard, STopRightShard, STopShardsGroup } from './Atoms';
import { zIndexes } from '@/enums/zIndexes';

const Cube = () => {
  return (
    <SRoot zIndex={zIndexes.navbar.cube}>
      <STopShardsGroup>
        <STopLeftShard />
        <STopRightShard />
      </STopShardsGroup>
      <SBottomShard />
    </SRoot>
  );
};

export default memo(Cube);
