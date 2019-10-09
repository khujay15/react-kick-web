import React from 'react';
interface SVGProps {
  fill?: string;
}
const SelectionArrowSVG: React.FC<SVGProps> = (
  props: SVGProps,
): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6.167" height="10.833">
      <defs>
        <clipPath id="a">
          <path d="M0 0h6.167v10.833H0z" fill="none" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          d="M.75.751l4.667 4.667L.75 10.084"
          data-name="패스 427"
          stroke="#6352ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </svg>
  );
};
export default SelectionArrowSVG;
