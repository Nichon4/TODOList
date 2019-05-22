import React from 'react';
import {Provider} from "react-redux";
import TodoContainer from "./components/todo-container";
import {persistor, store} from "./store";
import {LoadingView} from "./layouts/index";
import {PersistGate} from "redux-persist/lib/integration/react";


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
          <TodoContainer/>
        </PersistGate>
      </Provider>
    );
  }
}
