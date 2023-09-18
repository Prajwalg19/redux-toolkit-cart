import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            {
                //provider is the component that wraps the whole tree of components in the app and takes in store as a prop , this will make the store accessible to all the components in the application. There's better managment of state and there's no need to pass props from
                //parent to children component which would be tedious
            }
            <App />
        </Provider>
    </React.StrictMode>
);
