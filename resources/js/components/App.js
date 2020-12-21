import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import Mainpage from "./Mainpage/Mainpage"
import ShoppingPage from "./ShoppingPage/ShoppingPage"
import ProductPage from "./ProductPage/ProductPage"

import ProductCategoriesPage from "./ProductCategoriesPage/ProductCategoriesPage"
import CartPage from './CartPage/CartPage';

export default function App() {

    return (
        <Router>
            <Switch>
                <Route path="/product-categories/:CategoryID/:ProductID">
                    <ProductPage/>
                </Route>
                <Route path="/product-categories/:CategoryID">
                    <ProductCategoriesPage/>
                </Route>
                <Route path="/product-categories/">
                    <ProductCategoriesPage/>
                </Route>
                <Route path="/cart">
                    <CartPage/>
                </Route>
                <Route path="/">
                    <Mainpage/>
                </Route>
            </Switch>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}