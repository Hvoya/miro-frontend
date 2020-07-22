import React from 'react';

const BaseTemplateStructure = ({ navigation, content }) => {
  return (
    <div>
      <div>{navigation}</div>
      <div>{content}</div>
    </div>
  );
};

export default React.memo(BaseTemplateStructure);
