import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; 
import store from "./core/Store";
import rootReducer from "./services/rootReducer";
// import saga from "./services/saga";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./core/Routing/router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { COMPANY_INFO } from "./constants";

const storeMain = store.provideStore(rootReducer);

ReactDOM.render(
    <Provider store={storeMain}>
        <Router>
            <Header companyName={COMPANY_INFO.NAME}></Header>
            <Switch>
                { routes.map( route => <Route  {...route}/>) }
            </Switch>
            <Footer/>
        </Router>
    </Provider>
    , document.getElementById("root"));