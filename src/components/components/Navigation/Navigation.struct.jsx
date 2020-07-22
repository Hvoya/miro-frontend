import React from 'react';

const NavigationStruct = ({ logo, list, languageSwitcher, authManager }) => {
  return (
    <div>
      <div>{logo}</div>
      <div>{list}</div>
      <div>
        <div>{languageSwitcher}</div>
        <div>{authManager}</div>
      </div>
    </div>
  );
};

export default NavigationStruct;
