import React, { memo } from 'react';

const AngleIcon = (props) => {
  return (
    <svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 30.727 30.727"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
		l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
        />
      </g>
    </svg>
  );
};

export default memo(AngleIcon);
