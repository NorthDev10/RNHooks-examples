import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './components/Home';
import CallbacksCaching from './components/useCallback';
import classForm from './components/useCallback/formClass/Form';
import FuncForm from './components/useCallback/formFunc/Form';

import CounterHome from './components/useState';
import CounterClass from './components/useState/CounterClass';
import CounterFunc from './components/useState/CounterFunc';

import userListHome from './components/useEffect';
import UserList from './components/useEffect/UserList';
import UserListClass from './components/useEffect/UserListClass';

import FibonacciHome from './components/useMemo';
import Fibonacci from './components/useMemo/Fibonacci';
import FibonacciClass from './components/useMemo/FibonacciClass';

import CounterStyledHome from './components/useContext';
import CounterStyledClass from './components/useContext/CounterClass';
import CounterStyledFunc from './components/useContext/CounterFunc';

import AutosaveFormHome from './components/customHooks';
import AutosaveFormClass from './components/customHooks/class/AutosaveForm';
import AutosaveFormFunc from './components/customHooks/func/AutosaveForm';

const AppRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} title="Hooks examples" />
        <Scene
          key="callbacksCaching"
          component={CallbacksCaching}
          title="useCallback"
        />
        <Scene
          key="functionHandlerClassComponent"
          component={classForm}
          title="Functions in a class component"
        />
        <Scene
          key="functionHandlerFuncComponent"
          title="Functions in a functional component"
          component={FuncForm}
        />

        <Scene key="counterHome" component={CounterHome} title="useState" />
        <Scene
          key="counterClass"
          component={CounterClass}
          title="Counter in a class component"
        />
        <Scene
          key="counterFunc"
          title="Counter in a functional component"
          component={CounterFunc}
        />

        <Scene key="userListHome" title="useEffect" component={userListHome} />
        <Scene
          key="userList"
          title="User list in a functional component"
          component={UserList}
        />
        <Scene
          key="userListClass"
          title="User list in a class component"
          component={UserListClass}
        />

        <Scene key="fibonacciHome" title="useMemo" component={FibonacciHome} />
        <Scene
          key="fibonacci"
          title="Fibonacci in a functional component"
          component={Fibonacci}
        />
        <Scene
          key="fibonacciClass"
          title="Fibonacci in a class component"
          component={FibonacciClass}
        />

        <Scene
          key="autosaveFormHome"
          title="Custom Hooks"
          component={AutosaveFormHome}
        />
        <Scene
          key="autosaveFormClass"
          title="Autosave form with HOC"
          component={AutosaveFormClass}
        />
        <Scene
          key="autosaveFormFunc"
          title="Autosave form with Hooks"
          component={AutosaveFormFunc}
        />

        <Scene
          key="counterStyledHome"
          component={CounterStyledHome}
          title="useContext"
        />
        <Scene
          key="counterStyledClass"
          component={CounterStyledClass}
          title="Counter in a class component"
        />
        <Scene
          key="counterStyledFunc"
          title="Counter in a functional component"
          component={CounterStyledFunc}
        />
      </Stack>
    </Router>
  );
};

export default AppRouter;
