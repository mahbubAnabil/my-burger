import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Checkout/Checkout';
import { Route } from 'react-router';

const Main = props => {
    return (
        <div>
            <Header />
            <div class='container'>
                <BurgerBuilder />
            </div>

        </div>
    )
}

export default Main;