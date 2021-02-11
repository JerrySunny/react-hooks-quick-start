import './App.css';
import { Provider } from "react-redux";
import store from './redux/store';
import UserContainer from './containers/UserContainer';
// import FocusInput from './components/FocusInput';
// import Counter from './components/performance/memohook/Counter';
// import ClassCounter from './components/ClassCounter';
// import DataFetchUseReducer from './components/DataFetchUseReducer';
// import DataFetchUseState from './components/DataFetchUseState';
// import HookCounter from './components/HookCounter';
// import HooksMouseMove from './components/HooksMouseMove';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import ParentComponent from './components/performance/callbackhook/ParentComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ClassCounter></ClassCounter>
      <HookCounter /> */}
        {/* <HooksMouseMove /> */}
        {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
        {/* <DataFetchUseState></DataFetchUseState> */}
        {/* <DataFetchUseReducer /> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <Counter></Counter> */}
        {/* <FocusInput></FocusInput> */}
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;
