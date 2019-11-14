import React from 'react';
import color from '@/theme/color';
import { RouteComponentProps } from 'react-router-dom';

interface DefaultPageProps {
  themeText: string;
  history: RouteComponentProps['history'];
  isArrow?: boolean;
  BottomButtonText?: string;
  BottomOnClick?: () => void;
  children?: React.ReactNode;
}

const DefaultPage: React.FC<DefaultPageProps> = (
  props: DefaultPageProps,
): JSX.Element => {
  return (
    <div
      style={{
        display: 'column',
        marginTop: '4vh',
        height: '100vh',
        marginLeft: '20px',
        marginRight: '20px',
        backgroundColor: 'white',
      }}
    >
      <div onClick={props.history.goBack} style={{ cursor: 'pointer' }}>
        <img
          alt="Arrow"
          style={{ width: 10, marginBottom: '2vh' }}
          src="/images/Arrow@3x.png"
        />
      </div>

      <div style={{ fontSize: 24, marginBottom: '20px' }}>
        {props.themeText}
      </div>
      {props.children}
      {props.BottomButtonText && (
        <div
          style={{
            backgroundColor: color.oboon,
            zIndex: 2,
            height: '8vh',
            position: 'fixed',
            width: '100vw',
            left: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          onClick={props.BottomOnClick}
        >
          <span style={{ fontSize: 20, color: 'white' }}>
            {props.BottomButtonText}
          </span>
        </div>
      )}
    </div>
  );
};

/*
export default class DefaultPage extends React.Component<DefaultPageProps, {}> {
  render(): JSX.Element {
    return (
      <div
        style={{
          display: 'column',
          marginTop: '4vh',
          height: '100%',
          marginLeft: '16px',
          marginRight: '20px',
          backgroundColor: 'white',
        }}
      >
        <div>
          <img
            alt="Arrow"
            style={{ width: 10, marginBottom: '2vh' }}
            src="/images/Arrow@3x.png"
          />
        </div>

        <div style={{ fontSize: 24, marginBottom: '20px' }}>
          {this.props.themeText}
        </div>
        {this.props.children}
      </div>
    );
  }
}
*/

export default DefaultPage;
