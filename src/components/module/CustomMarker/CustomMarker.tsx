import React from 'react';

interface MarkerProps {
  lat: string | number;
  lng: string | number;
  SelectedMarkerId: number;
  MyId: number;
  AmountOfKickBoard: number;

  onClicked: () => void;

  text?: string;
}

const CustomMarker = (props: MarkerProps): JSX.Element => {
  if (props.SelectedMarkerId === props.MyId)
    return (
      <div
        style={{
          position: 'relative',
          display: 'table',
        }}
        onClick={props.onClicked}
      >
        <img
          alt="marker"
          style={{ width: '60px', height: '60px' }}
          src="/images/SelectedMarker@3x.png"
        />
        <div
          style={{
            color: 'white',
            fontSize: 'bold',
            top: '35%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {props.AmountOfKickBoard}
        </div>
      </div>
    );
  else
    return (
      <img
        alt="marker"
        style={{ width: '60px', height: '60px' }}
        src="/images/OboonMarker@3x.png"
        onClick={props.onClicked}
      />
    );
};

export default CustomMarker;
