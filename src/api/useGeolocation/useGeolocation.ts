/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

// No Geo API in http. or you get Secure origins Error.
// HTTPS=true npm start
const useGeolocation = (): any => {
  const [state, setState] = useState({
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 37.4882,
    longitude: 127.1026,
    speed: null,
    timestamp: Date.now(),
    error: false,
  });
  let mounted = true;
  let watchId: any;

  const onEvent = (event: any) => {
    if (mounted) {
      setState({
        ...state,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp,
      });
    }
  };
  const onError = (error: any) => {
    setState({ ...state, error: error.message });
    console.log('error: ', error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onError);
    //watchId = navigator.geolocation.watchPosition(onEvent, onError);

    return () => {
      mounted = false;
      //navigator.geolocation.clearWatch(watchId);
      console.log('clear watch');
    };
  }, [0]);

  return state;
};
export default useGeolocation;
