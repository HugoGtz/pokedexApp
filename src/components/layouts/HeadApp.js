import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

const {Header} = Layout;

class HeadApp extends Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
          <Header style={{ background: '#ffd', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
          </Header>
        )
    }
}

export default HeadApp; // Don’t forget to use export default!


