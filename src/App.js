import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRoute from "./route/AppRouter";
import { store, persistor } from "./redux/store";
import './App.scss';



export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  )
}