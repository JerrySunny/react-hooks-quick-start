import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "../redux/reducers/userReducer";
const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(
      applyMiddleware(thunk)
    );
const store = createStore(userReducer, enhancer);

export default store;