/* eslint-disable @typescript-eslint/camelcase */
/*

[{"rent_date":"2019-06-02T17:32:30.000Z","rent_kick_station_name":"EXAMPLE","return_date":"2019-06-02T17:32:35.000Z","return_kick_station_name":"EXAMPLE","usage_point":-500,"status":1},
{"rent_date":"2019-06-01T15:43:54.000Z","rent_kick_station_name":"EXAMPLE","return_date":"2019-06-01T15:43:57.000Z","return_kick_station_name":"EXAMPLE","usage_point":-500,"status":1},
{"rent_date":"2019-06-01T15:42:27.000Z","rent_kick_station_name":"EXAMPLE","return_date":"2019-06-01T15:42:29.000Z","return_kick_station_name":"EXAMPLE","usage_point":-500,"status":1},{"rent_date":"2019-06-01T15:41:24.000Z","rent_kick_station_name":"EXAMPLE","return_date":"2019-06-01T15:41:26.000Z","return_kick_station_name":"EXAMPLE","usage_point":-500,"status":1},{"rent_date":"2019-06-01T15:37:59.000Z","rent_kick_station_name":"EXAMPLE","return_date":"2019-06-01T15:38:03.000Z","return_kick_station_name":"EXAMPLE","usage_point":-500,"status":1}],
    
*/

import React from 'react';
import DefaultPage from '@/components/DefaultPage';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { color } from '@/theme';

import { RouteComponentProps } from 'react-router-dom';
import ArrowBox from '@/components/module/ArrowBox';

interface UsageReturn {
  rent_date: string;
  return_date: string;
  rent_kick_station_name: string;
  return_kick_station_name: string;
}

const renderItems = (item: UsageReturn, key: number): JSX.Element => {
  const rentDate = new Date(item.rent_date);
  const returnDate = new Date(item.return_date);
  const fullDate = rentDate.toISOString().slice(0, 10);
  const rentHourMinute = `${rentDate.getHours()}:${rentDate.getMinutes()}`;
  const returnHourMinute = `${returnDate.getHours()}:${returnDate.getMinutes()}`;

  const rentStation = item.rent_kick_station_name;
  const returnStation = item.return_kick_station_name;

  //const returnDate = new Date(item.return_date).toISOString().slice(0, 10);
  return (
    <div style={{ marginBottom: '2vh' }} key={key}>
      <ArrowBox>
        <div style={{ width: '100%', marginTop: '2vh', marginBottom: '2vh' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '20px',
              marginBottom: '2vh',
            }}
          >
            <div style={{ float: 'left' }}>{fullDate}</div>

            <div
              style={{
                backgroundColor: color.grey,
                marginLeft: '20px',
                flex: 1,
                height: '1px',
                float: 'left',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: color.oboon,
                marginRight: '2vh',
              }}
            />

            {rentHourMinute}
            <span style={{ marginLeft: '20px' }} />

            {rentStation}
          </div>

          <div>↓</div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: color.oboon,
                marginRight: '2vh',
              }}
            />
            {returnHourMinute}
            <span style={{ marginLeft: '20px' }} />
            {returnStation}
          </div>
          <div style={{ marginTop: '2vh' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1vh',
              }}
            >
              <span>총 사용시간</span>
              <span style={{ marginLeft: 'auto' }}>0분</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>총 결제포인트</span>
              <span style={{ color: color.oboon }}>500P</span>
            </div>
          </div>
        </div>
      </ArrowBox>
    </div>
  );
};

const MyUsage: React.FC<RouteComponentProps> = (
  props: RouteComponentProps,
): JSX.Element => {
  const usageHistory = [
    {
      rent_date: '2019-06-02T17:32:30.000Z',
      rent_kick_station_name: 'EXAMPLE 1',
      return_date: '2019-06-02T17:32:35.000Z',
      return_kick_station_name: 'EXAMPLE 2',
      usage_point: -500,
      status: 1,
    },
    {
      rent_date: '2019-06-01T15:43:54.000Z',
      rent_kick_station_name: 'EXAMPLE 3',
      return_date: '2019-06-01T15:43:57.000Z',
      return_kick_station_name: 'EXAMPLE 4',
      usage_point: -500,
      status: 1,
    },
    {
      rent_date: '2019-06-01T15:42:27.000Z',
      rent_kick_station_name: 'EXAMPLE 5',
      return_date: '2019-06-01T15:42:29.000Z',
      return_kick_station_name: 'EXAMPLE 6',
      usage_point: -500,
      status: 1,
    },
    {
      rent_date: '2019-06-01T15:41:24.000Z',
      rent_kick_station_name: 'EXAMPLE 7',
      return_date: '2019-06-01T15:41:26.000Z',
      return_kick_station_name: 'EXAMPLE 8',
      usage_point: -500,
      status: 1,
    },
    {
      rent_date: '2019-06-01T15:37:59.000Z',
      rent_kick_station_name: 'EXAMPLE 9',
      return_date: '2019-06-01T15:38:03.000Z',
      return_kick_station_name: 'EXAMPLE 10',
      usage_point: -500,
      status: 1,
    },
  ];

  return (
    <DefaultPage themeText="내 사용내역" history={props.history}>
      <div style={{ marginBottom: '5vh' }} />

      {usageHistory.map((item, i) => {
        return renderItems(item, i);
      })}

      <div style={{ marginBottom: '5vh' }} />
    </DefaultPage>
  );
};

export default MyUsage;
