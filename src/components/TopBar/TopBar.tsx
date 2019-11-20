import React from 'react';
import * as s from './TopBar.styled';
import Menu from './Menu';
import Info from './Info';
import color from '../../theme/color';
import { RouteComponentProps } from 'react-router-dom';
import ScrollLock from 'react-scrolllock';

interface TopBarProps {
  history: RouteComponentProps['history'];
}
interface TopBarState {
  menuOpen: boolean;
  infoOpen: boolean;
}

export default class TopBar extends React.Component<TopBarProps, TopBarState> {
  state = {
    menuOpen: false,
    infoOpen: false,
  };

  handleMenuClick = (): void => {
    this.setState({ menuOpen: !this.state.menuOpen, infoOpen: false });
  };
  handleInfolick = (): void => {
    this.setState({ menuOpen: false, infoOpen: !this.state.infoOpen });
  };

  handleLogoClick = (): void => {
    this.setState({ menuOpen: false, infoOpen: false });
  };

  render(): JSX.Element {
    return (
      <div style={{ width: '100%', marginRight: 0, padding: 0 }}>
        <ScrollLock />
        <s.TopBar>
          <div
            style={{
              marginLeft: 12,
              marginRight: 12,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Hamburger
              open={this.state.menuOpen}
              onClick={this.handleMenuClick}
            />
            <img
              src="/images/ic_logo@3x.png"
              alt={'logo_image'}
              style={{
                height: '32px',
                marginLeft: 'auto',
                marginRight: 'auto',
                cursor: 'pointer',
              }}
              onClick={this.handleLogoClick}
            />
            <InfoButton
              open={this.state.infoOpen}
              onClick={this.handleInfolick}
            />
          </div>
        </s.TopBar>

        <Menu open={this.state.menuOpen} history={this.props.history} />
        <Info open={this.state.infoOpen} />
      </div>
    );
  }
}

// button Component below. didn't spllit bdcause it is only for topbar;

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = (
  props: HamburgerProps,
): JSX.Element => {
  const handleClick = (): void => {
    props.onClick();
  };

  return (
    <div style={{ display: 'table' }}>
      <s.LineContainer onClick={handleClick}>
        <s.Line
          style={{
            marginBottom: '5px',
            transform: props.open ? 'translateY(7px)  rotate(45deg)' : 'none',
          }}
          color={props.open ? color.oboon : color.black}
        />
        <s.Line
          style={{
            marginBottom: '5px',
            transform: props.open ? 'scale(0,0)' : 'none',
          }}
          color={props.open ? color.oboon : color.black}
        />
        <s.Line
          style={{
            transform: props.open ? 'translateY(-7px) rotate(315deg)' : 'none',
          }}
          color={props.open ? color.oboon : color.black}
        />
      </s.LineContainer>
    </div>
  );
};

interface InfoButtonProps {
  open: boolean;
  onClick: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = (props: InfoButtonProps) => {
  const handleClick = (): void => {
    props.onClick();
  };

  return (
    <div
      style={{
        width: '26px',
        height: '26px',
        borderRadius: '15px',
        display: 'flex',
        border: '1px solid',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderColor: props.open ? color.oboon : color.black,
        backgroundColor: props.open ? color.oboon : 'white',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <p
        style={{
          color: props.open ? 'white' : color.black,
          fontStyle: 'bold',
        }}
      >
        i
      </p>
    </div>
  );
};
