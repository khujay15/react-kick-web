import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Route,
  NavLink,
  withRouter,
  RouteComponentProps,
  Switch,
} from 'react-router-dom';
import MapPage from '../src/pages/MapPage';
import TopBar from './components/TopBar/';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StoreState } from './store';

import { LoginReducerState } from './store/LoginReducer/LoginReducer';
import { LoginSuccessFunc } from './store/LoginReducer/LoginAction';
const TestButton = styled.button`
  border-radius: 5px;
  padding: 1px;
  min-width: 120px;
  font-weight: 600;
`;

interface PPP extends RouteComponentProps<{}> {
  name?: string;
  age?: number;
}
interface SSS {
  test?: number;
  menuOpen: boolean;
}
interface DispatchProps {
  LoginSuccessFunc: typeof LoginSuccessFunc;
}

interface WindowSize {
  width: number;
  height: number;
}

type Props = PPP & LoginReducerState & DispatchProps;

function getWindowDimensions(): WindowSize {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions(): WindowSize {
  const [windowDimensions, setWindowDimensions] = useState<WindowSize>(
    getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Home: React.FC<RouteComponentProps<{ name: string }>> = (
  Props,
): JSX.Element => {
  console.log(Props);
  return (
    <>
      <h1>this is Home component</h1>
      <h2>helllo {Props.match.params.name}</h2>
    </>
  );
};

class App extends React.Component<Props, SSS> {
  state = {
    menuOpen: false,
  };

  routeChange = (): void => {
    const path = `home/sssss`;
    this.props.history.push(path);
  };

  handleMenuClick(): void {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick(): void {
    this.setState({ menuOpen: false });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick = (event: any): void => {
    // accessible
    console.log('style: ', event.target.style);
    console.log('class List', event.target.classList); //to change style via css
    event.target.style.backgroundColor = 'blue';
  };

  render(): JSX.Element {
    return (
      <>
        <TopBar />
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route exact path="/app" component={AppAp} />
          <Route exact path="/home/:name" component={Home} />
        </Switch>
      </>
    );
  }
}

const AppAp: React.FC<PPP> = (Props): JSX.Element => {
  const { height, width } = useWindowDimensions();
  const [test, setCount] = useState(['testetstest', 'aaaaaa']);
  const addName = (): void => {
    console.log('get size');
    setCount([...test, 'bbbb']);
    console.log(Props);
  };

  return (
    <div style={{ backgroundColor: 'red' }}>
      <li>
        <NavLink exact to="/home">
          Home
        </NavLink>
      </li>

      <div style={{ flexDirection: 'row' }}>
        <h1>{`${width} *${height}`}</h1>
        <TestButton onClick={addName}>
          {test.map((data, i) => {
            return (
              <div
                style={{ justifyContent: 'center', alignContent: 'center' }}
                key={i}
              >
                {data}
              </div>
            );
          })}
        </TestButton>
        <TestButton onClick={addName}>
          {test.map((data, i) => {
            return (
              <div
                style={{ justifyContent: 'center', alignContent: 'center' }}
                key={i}
              >
                {data}
              </div>
            );
          })}
        </TestButton>
        <TestButton onClick={addName}>
          {test.map((data, i) => {
            return (
              <div
                style={{ justifyContent: 'center', alignContent: 'center' }}
                key={i}
              >
                {data}
              </div>
            );
          })}
        </TestButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState): LoginReducerState => ({
  point: state.LoginReducer.point,
  loginSuccess: state.LoginReducer.loginSuccess,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<LoginReducerState, undefined, AnyAction>,
): DispatchProps =>
  bindActionCreators(
    {
      LoginSuccessFunc,
    },
    dispatch,
  );

export default withRouter(
  connect<LoginReducerState, DispatchProps, PPP, StoreState>(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);

// export default withRouter(App);
