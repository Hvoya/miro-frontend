---
to: "<%= type === 'component' || type === 'structure' || type === 'template' ? `src/components/${type}s/${Name}${suffix}/Atoms.jsx` : null %>"
---

import styled from 'styled-components';
