import React from 'react';
import SelectionArrow from '@/components/module/SelectionArrowSVG';

interface ArrowBoxProps {
  Text: string;
  NoArrow?: boolean;
}

const ArrowBox: React.FC<ArrowBoxProps> = (props: ArrowBoxProps) => {
  return (
    <div
      style={{
        boxShadow: '0px 5px 5px 1px #dbdbdb',
        height: '5vh',
        minHeight: '50px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          marginLeft: '12px',
          marginRight: '12px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ marginRight: 'auto' }}>{props.Text}</span>

        {!props.NoArrow && <SelectionArrow />}
      </div>
    </div>
  );
};

export default ArrowBox;
