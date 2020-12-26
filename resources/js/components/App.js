import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import Mainpage from "./Mainpage/Mainpage"
import ProductPage from "./ProductPage/ProductPage"

import ProductCategoriesPage from "./ProductCategoriesPage/ProductCategoriesPage"
import CartPage from './CartPage/CartPage';
import ErrorPage from "./ErrorPage/ErrorPage";

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/product-categories/:CategoryID/:ProductID">
                    <ProductPage/>
                </Route>
                <Route exact path="/product-categories/:CategoryID">
                    <ProductCategoriesPage/>
                </Route>
                <Route exact path="/product-categories/">
                    <ProductCategoriesPage/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route exact path="/">
                    <Mainpage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>   

            </Switch>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}