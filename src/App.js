import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetchUseReducer from './components/DataFetchUseReducer';
import DataFetchUseState from './components/DataFetchUseState';
import HookCounter from './components/HookCounter';
import HooksMouseMove from './components/HooksMouseMove';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter></ClassCounter>
      <HookCounter /> */}
      {/* <HooksMouseMove /> */}
      {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
      {/* <DataFetchUseState></DataFetchUseState> */}
      <DataFetchUseReducer />
    </div>
  );
}

export default App;
