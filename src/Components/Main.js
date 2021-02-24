import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import Orders from './Orders/Orders';
import Checkout from './Checkout/Checkout';

import Auth from './Auth/Auth';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
const Main = props => {
    let routes = null;
    if (props.token === null) {
        routes = (
            <Switch>
                <Route path="/login" component={Auth} />
                <Redirect to="/login" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <div>
            <Header />
            <div class='container'>
                {routes}
            </div>

        </div>
    )
}

export default connect(mapStateToProps)(Main);