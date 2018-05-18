
import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button, Checkbox } from 'antd';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Checkbox ><a href="http://www.alipay.com/">第一个菜单项</a></Checkbox> 
        </Menu.Item>
        <Menu.Item key="1">
            <Checkbox >
                <a href="http://www.taobao.com/">第二个菜单项</a></Checkbox> 
        </Menu.Item>
        <Button type="primary" onClick={this.handleSubmit}>确定</Button>
        <Button type="ghost" onClick={this.handleReset}>重置</Button>
    </Menu>
);


class CustomColum extends Component {
    render() {
        return (

            <Dropdown overlay={menu} trigger={['click']}>
                <Button className="ant-dropdown-link">
                    点击触发 <Icon type="down" />
                </Button>
            </Dropdown>

        )
    }
}
export default CustomColum;