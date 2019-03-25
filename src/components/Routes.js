import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Main from './Main';

class Routes extends Component {
    render() {
        return (
            <Route path="/" exact component={Main} />
        )
    }
}

export default Routes;