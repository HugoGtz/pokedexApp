import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Index() {
  return <h2>index</h2>;
}

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Index} />
            </Router>
        );
    }
}

export default App;
