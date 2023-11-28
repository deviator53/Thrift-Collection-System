import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Analytics />
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
