import React from 'react';
import * as s from './Menu.styled';
import { color } from '../../../theme';
import useLogin from '@/store/LoginReducer';
import SelectionArrow from '@/components/module/SelectionArrowSVG';

interface MenuProps {
  open: boolean;
  color?: string;
  delay?: number | string;
  onClick?: () => void;
  hover?: boolean;
  point?: number | undefined;
}

const MenuTab: React.FC<MenuProps> = (props: MenuProps): JSX.Element => {
  const { UserInfo, Test } = useLogin();
  console.log('MenuTab: ', UserInfo);
  const menuItems = (
    <s.MenuTabView>
      <div style={{ lineHeight: '0.5em', marginBottom: '5vh' }}>
        {UserInfo.loginSuccess ? (
          <>
            <s.PurpleText>{UserInfo.name}</s.PurpleText>
            <p style={{ color: color.grey, fontSize: 20 }}>{UserInfo.email}</p>
          </>
        ) : (
          <>
            <s.ArrowItem>
              <s.PurpleText onClick={Test}>로그인이 필요합니다!</s.PurpleText>
              <SelectionArrow />
            </s.ArrowItem>
          </>
        )}
      </div>

      <s.ButtonView>
        <s.ButtonItem>
          <s.ButtonImage src="/images/icons/ic_mypoint@3x.png" />
          <span>포인트</span>
        </s.ButtonItem>
        <s.ButtonItem>
          <s.ButtonImage src="/images/icons/ic_myhistory@3x.png" />
          <span>이용내역</span>
        </s.ButtonItem>
        <s.ButtonItem>
          <s.ButtonImage src="/images/icons/ic_mycard@3x.png" />
          <span>내 카드</span>
        </s.ButtonItem>
      </s.ButtonView>
      <div
        style={{
          height: '1px',
          width: '100%',
          background: color.grey,
          marginBottom: '20px',
        }}
      />

      <s.ArrowItem>
        <span>공지사항</span>
        <SelectionArrow />
      </s.ArrowItem>

      <s.ArrowItem>
        <span>이벤트</span>
        <SelectionArrow />
      </s.ArrowItem>

      <s.ArrowItem>
        <span>설정</span>
        <SelectionArrow />
      </s.ArrowItem>

      <s.ArrowItem>
        <span>이용방법</span>
        <SelectionArrow />
      </s.ArrowItem>
    </s.MenuTabView>
  );

  return (
    <s.MenuContainer open={props.open}>
      {props.open ? menuItems : null}
    </s.MenuContainer>
  );
};

export default MenuTab;

/*
export class Menu extends React.Component<MenuProps, { open: boolean }> {
  state = {
    open: this.props.open ? this.props.open : false,
  };

  render(): JSX.Element {
    const menuItems = (
      <div
        style={{
          marginLeft: 12,
          marginRight: 12,
          marginTop: '11vh',
        }}
      >
        <div style={{ lineHeight: '0.5em', marginBottom: '5vh' }}>
          <span
            style={{
              color: color.oboon,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            로그인이 필요합니다
          </span>
          <span
            style={{
              color: 'black',
              marginLeft: 5,
              fontSize: 20,
            }}
          >
            님
          </span>
          <p style={{ color: color.grey, fontSize: 20 }}>example@naver.com</p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '5vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <s.ButtonImage src="/images/icons/ic_mypoint@3x.png" />
            <span>포인트</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <s.ButtonImage src="/images/icons/ic_myhistory@3x.png" />
            <span>지불정보</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <s.ButtonImage src="/images/icons/ic_mycard@3x.png" />
            <span>내 카드</span>
          </div>
        </div>
        <div style={{ height: '1px', width: '100%', background: color.grey }} />
        <div>
          <span>공지사항</span>
        </div>
        <div>
          <span>공지사항</span>
        </div>
        <div>
          <span>공지사항</span>
        </div>
      </div>
    );
    return (
      <s.MenuContainer open={this.state.open}>
        {this.state.open ? menuItems : null}
      </s.MenuContainer>
    );
  }
}

const mapStateToProps = (state: StoreState): LoginReducerState => ({
  point: state.LoginReducer.point,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<LoginReducerState, undefined, AnyAction>,
  ownProps: MenuProps,
): DispatchProps =>
  bindActionCreators(
    {
      LoginSuccessFunc,
    },
    dispatch,
  );

export default connect<LoginReducerState, DispatchProps, MenuProps, StoreState>(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);

*/

/* MenuItem.jsx

    const menu = ['About Us', 'Our Products', 'Services', 'FAQ', 'Contact Us'];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={(): void => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });


export class MenuItem extends React.Component<MenuProps, {}> {
  state = {
    hover: false,
  };

  handleHover = (): void => {
    this.setState({ hover: !this.state.hover });
  };

  render(): JSX.Element {
    const styles = {
      container: {
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: 'white',

        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'blue',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
      },
    };
    return (
      <>
        <s.MenuItemContainer>
          <div
            style={styles.menuItem}
            onMouseEnter={(): void => {
              this.handleHover();
            }}
            onMouseLeave={(): void => {
              this.handleHover();
            }}
            onClick={this.props.onClick}
          >
            {this.props.children}
          </div>
          <div style={styles.line} />
        </s.MenuItemContainer>
      </>
    );
  }
}
*/
