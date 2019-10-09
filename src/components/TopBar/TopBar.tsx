import React from 'react';
import * as s from './TopBar.styled';
import Menu from './Menu';
import color from '../../theme/color';

interface TopBarState {
  menuOpen: boolean;
  infoOpen: boolean;
}

export default class TopBar extends React.Component<{}, TopBarState> {
  state = {
    menuOpen: false,
    infoOpen: false,
  };

  handleMenuClick = (): void => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  handleInfolick = (): void => {
    this.setState({ infoOpen: !this.state.infoOpen });
  };

  handleLogoClick = (): void => {
    this.setState({ menuOpen: false, infoOpen: false });
  };

  render(): JSX.Element {
    return (
      <div style={{ width: '100%', marginRight: 0, padding: 0 }}>
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
              color={this.state.menuOpen ? color.oboon : color.black}
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
                borderColor: color.grey,
                cursor: 'pointer',
              }}
              onClick={this.handleInfolick}
            >
              <p
                style={{
                  color: color.grey,
                }}
              >
                i
              </p>
            </div>
          </div>
        </s.TopBar>

        <Menu open={this.state.menuOpen} />
      </div>
    );
  }
}

// hamburger Component below. didn't spllit cause it is only for topbar;

interface HamburgerProps {
  open: boolean;
  color: string;
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
            transform: props.open ? 'translateY(7px)  rotate(90deg)' : 'none',
          }}
          color={props.color}
        />
        <s.Line
          style={{
            marginBottom: '5px',
            transform: props.open ? 'translateX(-5px)  rotate(90deg)' : 'none',
          }}
          color={props.color}
        />
        <s.Line
          style={{
            transform: props.open
              ? 'translateX(-10px) translateY(-7px) rotate(90deg)'
              : 'none',
          }}
          color={props.color}
        />
      </s.LineContainer>
    </div>
  );
};
