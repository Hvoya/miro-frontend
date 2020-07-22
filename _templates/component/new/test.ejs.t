---
to: src/components/<%= type %>s/<%= Name %>/<%= Name %>.spec.jsx
---

import { shallow } from 'enzyme';

import <%= Name %> from '/<%= Name %>.jsx';

describe('Test for <%= Name %> component', () => {
  it('', () => {
    const wrapper = shallow(<<%= Name %> />);
  });
});
