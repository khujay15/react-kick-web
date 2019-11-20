import React from 'react';
import SelectionArrow from '@/components/module/SelectionArrowSVG';

interface ArrowBoxProps {
  Text?: string;
  children?: React.ReactNode;
}

const ArrowBox: React.FC<ArrowBoxProps> = (props: ArrowBoxProps) => {
  return (
    <div
      style={{
        boxShadow: '0px 3px 3px #dbdbdb',

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
        {props.Text && (
          <>
            <span style={{ marginRight: 'auto' }}>{props.Text}</span>
            <SelectionArrow />
          </>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default ArrowBox;
