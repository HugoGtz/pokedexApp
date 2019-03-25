import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import '../css/App.css';
import Routes from './Routes';
import SliderBar from './layouts/SliderBar';
import HeadApp from './layouts/HeadApp';

import { Layout } from 'antd';

const {Content} = Layout;

let contentConf = {
    margin: '24px 16px',
    padding: 24,
    background: '#fff',
    minHeight: "100vh" ,
}

class App extends Component {
    
    render() {
        return (
            <Router>
                <Layout>
                    <SliderBar/>
                <Layout>
                    <HeadApp/>
                    <Content style={contentConf}>
                        <Routes/>
                    </Content>
                </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
