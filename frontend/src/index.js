import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Elements, StripeProvider } from "react-stripe-elements";
import App from "./App";
import StripeScriptLoader from 'react-stripe-script-loader'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <StripeScriptLoader
        uniqueId='myUniqueId'
        script='https://js.stripe.com/v3/'
        loader="Loading..."
      >
        {/* public stripe key https://stripe.com/docs/keys */}
        <StripeProvider apiKey={"pk_test_qblFNYngBkEdjEZ16jxxoWSM"}>   
          <Elements>
            <App />
          </Elements>
        </StripeProvider>
      </StripeScriptLoader>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
