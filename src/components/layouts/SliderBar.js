import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

const {Sider} = Layout;

class SliderBar extends Component {
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
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
              </Menu>
            </Sider>
        )
    }
}

export default SliderBar; // Don’t forget to use export default!


