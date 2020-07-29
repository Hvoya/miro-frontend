import React from 'react';
import Switch from 'rc-switch';

const LanguageSwitch = () => {
  return <Switch defaultChecked={true} checkedChildren="开" unCheckedChildren="关" />;
};

export default React.memo(LanguageSwitch);
