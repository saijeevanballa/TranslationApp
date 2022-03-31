import { PersistGate } from "redux-persist/es/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import RootRouter from "./rootRouter"
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>

  );
}

export default App;
