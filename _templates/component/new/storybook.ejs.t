---
to: "<%= type === 'component' ? `src/components/components/${Name}/${Name}.stories.jsx` : null %>"
---

import React from 'react';

import <%= Name %> from './<%= Name %>.jsx';

export default { title: '<%= Name %>' };
