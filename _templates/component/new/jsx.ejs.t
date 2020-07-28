---
to: src/components/<%= type %>s/<%= Name %><%= suffix %>/<%= Name %><%= suffix %>.jsx
---

import React from 'react';

const <%= Name %><%= suffix %> = () => {
  return <div />;
};

export default React.memo(<%= Name %><%= suffix %>);
