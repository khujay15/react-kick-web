import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import useGeolocation from '@/components/useGeolocation';
import { color } from '@/theme';
import CustomMarker from '@/components/module/CustomMarker';

const SimpleMap: React.FC = (props): JSX.Element => {
  const [SelectedId, setID] = useState(1);

  const Geolocation = useGeolocation();
  const MyLocation = {
    lat: Geolocation.latitude,
    lng: Geolocation.longitude,
  };

  console.log('myLoc: ', MyLocation);

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB0dvh05pdwBNJwFUVSE5AIn5L98Wskyqc' }}
        defaultZoom={15}
        center={MyLocation}
        options={{ disableDefaultUI: true }}
        yesIWantToUseGoogleMapApiInternals
      >
        <CustomMarker
          lat={Geolocation.latitude + 0.02}
          lng={Geolocation.longitude}
          text="My Marker1"
          SelectedMarkerId={SelectedId}
          MyId={1}
          onClicked={(): void => setID(1)}
          AmountOfKickBoard={3}
        />
        <CustomMarker
          lat={Geolocation.latitude}
          lng={Geolocation.longitude - 0.02}
          text="My Marker2"
          SelectedMarkerId={SelectedId}
          MyId={2}
          onClicked={(): void => setID(2)}
          AmountOfKickBoard={10}
        />
      </GoogleMapReact>

      <div
        style={{
          backgroundColor: color.oboon,
          zIndex: 2,
          width: '100vw',
          height: '7vh',
          position: 'fixed',
          left: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={(): void => console.log('LENT TEST')}
      >
        <span style={{ fontSize: 20, color: 'white' }}>대여하기</span>
      </div>
    </div>
  );
};

export default SimpleMap;

// import { connect } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { Action } from 'redux';
// import { StoreState } from '@/store';
// import { LoginSuccessFunc } from '../store/LoginReducer/LoginAction';
// import { LoginReducerState } from '@/store/LoginReducer/LoginReducer';

// interface MapProps {
//   name?: string;
// }

// interface DispatchProps {
//   login: (num: number) => void;
// }

// type Props = MapProps & LoginReducerState & DispatchProps;
// const mapStateToProps = (state: StoreState): LoginReducerState => ({
//   point: state.LoginReducer.point,
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<LoginReducerState, undefined, Action>,
// ): DispatchProps => {
//   return {
//     login: (num: number): void => {
//       dispatch(LoginSuccessFunc(num));
//       console.log('Login completed [UI]');
//     },
//   };
// };

// export default connect<LoginReducerState, DispatchProps, MapProps, StoreState>(
//   mapStateToProps,
//   mapDispatchToProps,
// )(SimpleMap);
