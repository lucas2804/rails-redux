import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { middleware as reduxPackMiddleware } from "redux-pack";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "../../redux/reducers";

const enhancer = composeWithDevTools(
  applyMiddleware(thunk, reduxPackMiddleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../../redux/reducers", () => {
      const nextRootReducer = require("../../redux/reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
