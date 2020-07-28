---
to: src/components/<%= type %>s/<%= Name %><%= suffix %>/<%= Name %><%= suffix %>.spec.jsx
---

import React from 'react';
import { shallow } from 'enzyme';

import <%= Name %><%= suffix %> from './<%= Name %><%= suffix %>.jsx';

describe('Test for <%= Name %><%= suffix %>', () => {
  it('', () => {
    const wrapper = shallow(<<%= Name %><%= suffix %> />);
  });
});
