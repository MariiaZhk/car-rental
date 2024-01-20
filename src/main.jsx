// import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { App } from "./components/App";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/car-rental">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
  // </React.StrictMode>
);
