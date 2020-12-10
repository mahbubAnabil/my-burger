import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Checkout/Checkout';
import { Route } from 'react-router-dom';

const Main = props => {
    return (
        <div>
            <Header />
            <div class='container'>
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
            </div>

        </div>
    )
}

export default Main;